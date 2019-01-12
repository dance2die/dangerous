import resolve from "rollup-plugin-node-resolve";
// https://github.com/rollup/rollup-plugin-typescript
import typescript from "rollup-plugin-typescript";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import analyze from "rollup-plugin-analyzer";

export default {
  // Optimization: Don't include react in the library.
  // https://hackernoon.com/making-of-a-component-library-for-react-e6421ea4e6c7
  external: ["react", "react-dom", "tslib"],
  input: "./src/dangerous.tsx",
  output: [
    {
      file: "dist/dangerous.cjs.js",
      format: "cjs",
      name: "dangerous"
    },
    {
      file: "dist/dangerous.esm.js",
      format: "es",
      name: "dangerous"
    }
  ],
  plugins: [
    resolve(),
    typescript(),
    // the ".ts" extension is required
    commonjs({ extensions: [".js", ".ts", , ".tsx"] }),
    terser(),
    analyze()
  ]
};
