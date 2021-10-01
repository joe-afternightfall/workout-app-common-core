import dts from 'rollup-plugin-dts';
import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: './src/index.ts',
    output: {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [typescript()],
  },
  {
    input: 'dist/index.d.ts',
    output: {
      file: 'core/index.d.ts',
    },
    plugins: [dts()],
  },
];
