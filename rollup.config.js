import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import json from 'rollup-plugin-json'

// 不打包所有依赖
const excludeAllExternals = id => !id.startsWith('.') && !id.startsWith('/');

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  external: excludeAllExternals,
  plugins: [
    json(),
    replace({
			'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs()
  ]
}