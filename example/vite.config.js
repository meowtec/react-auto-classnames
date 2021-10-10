/**
 * @type {import('vite').UserConfig}
 */
export default {
  // 配置选项
  esbuild: {
    jsxFactory: 'createElement',
    jsxFragment: 'Fragment',
    jsxInject: 'import { createElement, Fragment } from \'react-auto-classnames\'',
  },
}