import vue from 'rollup-plugin-vue';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import styles from 'rollup-plugin-styles';
import replace from '@rollup/plugin-replace';

const watch = Boolean(process.env.ROLLUP_WATCH);

import { version } from './package.json';

const pluginName = 'MenuPanel';
const fileDest = watch
  ? `./../../DTCD/server/plugins/DTCD-${pluginName}_${version}/${pluginName}.js`
  : `./build/${pluginName}.js`;

const plugins = [
  resolve({
    jsnext: true,
    preferBuiltins: true,
    browser: true,
    dedupe: ['vue'],
    extensions: ['.mjs', '.js', '.json', '.node', '.vue'],
  }),
  commonjs(),
  vue({
    preprocessStyles: true,
  }),
  replace({
    preventAssignment: true,
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.VUE_ENV': JSON.stringify('browser'),
  }),
  styles({
    mode: 'inject',
    modules: true,
  }),
  json(),
];

export default {
  plugins,
  input: `src/${pluginName}.js`,
  output: {
    file: fileDest,
    format: 'esm',
    sourcemap: false,
  },
  watch: {
    include: ['./src/**'],
  },
};
