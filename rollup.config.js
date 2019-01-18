// import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
// import commonjs from "rollup-plugin-commonjs";
// import { terser } from "rollup-plugin-terser";
// import analyze from "rollup-plugin-analyzer";

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
    typescript({
      typescript: require("typescript")
    })
  ]
};
// plugins: [
//   resolve(),
//   typescript({ declaration: true }),
//   // // the ".ts" extension is required
//   // commonjs({ extensions: [".js", ".ts", , ".tsx"] }),
//   // terser(),
//   analyze()
// ]
