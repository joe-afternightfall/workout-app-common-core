import dts from 'rollup-plugin-dts';
import pkg from './package.json';

export default [
  {
    input: 'core/src/index.js',
    output: {
      file: pkg.main,
      format: 'cjs',
    },
  },
  {
    input: 'core/src/index.d.ts',
    output: {
      file: 'core/index.d.ts',
    },
    plugins: [dts()],
  },
];
