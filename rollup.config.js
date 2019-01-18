import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
// import uglify from "rollup-plugin-uglify";
// const { uglify } = require("rollup-plugin-uglify");
// import { uglify } from "rollup-plugin-uglify";
// // https://github.com/TrySound/rollup-plugin-uglify/issues/37#issuecomment-329108094
// import { minify } from "uglify-es";
// const uglify = require("rollup-plugin-uglify");
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
// import uglify from "rollup-plugin-uglify-es";
import analyze from "rollup-plugin-analyzer";

// https://hackernoon.com/building-and-publishing-a-module-with-typescript-and-rollup-js-faa778c85396
import pkg from "./package.json";

export default {
  input: "./src/dangerous.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      name: pkg.name
    },
    {
      file: pkg.module,
      format: "es",
      name: pkg.name
    }
  ],
  // Optimization: Don't include react in the library.
  // https://hackernoon.com/making-of-a-component-library-for-react-e6421ea4e6c7
  // external: ["react", "react-dom"],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    resolve(),
    typescript(),
    // the ".ts" extension is required
    commonjs({ extensions: [".js", ".ts", , ".tsx"] }),
    process.env.NODE_ENV === "production" && terser(),
    analyze()
  ]
};
