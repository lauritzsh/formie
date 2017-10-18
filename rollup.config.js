import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'lib/index.js',
  output: {
    file: 'lib/bundle.js',
    name: 'Formie',
    format: 'iife',
  },
  plugins: [commonjs(), resolve(), uglify()],
  external: ['react'],
  globals: {
    react: 'React',
  },
};
