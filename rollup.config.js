import resolve from "rollup-plugin-node-resolve";
// https://github.com/rollup/rollup-plugin-typescript
import typescript from "rollup-plugin-typescript";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
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
    terser()
  ]
};
