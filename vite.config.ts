/*
 * @Author: ShawnPhang
 * @Date: 2021-09-02 15:36:56
 * @Description:
 * @LastEditors: ShawnPhang <site: book.palxp.com>
 * @LastEditTime: 2023-01-03 17:17:31
 */
import vue from '@vitejs/plugin-vue'
import marked from 'marked'
import hljs from 'highlight.js'
import path from 'path'
import vueDocs from 'vite-vue3-docs'
// import analyze from 'rollup-plugin-analyzer';

const isHashRouterMode = process.env.VITE_ROUTER_MODE === 'hash'
const basePath = isHashRouterMode ? './' : '/'
const markdownPlugin = (options: any) => {
  return {
    name: 'markdown',
    transform(code: string, id: string) {
      if (!/\.md/.test(id)) {
        return
      }
      const result = marked(code, options)
      return `export default ${JSON.stringify(result)}`
    },
  }
}

export default {
  base: basePath,
  resolve: {
    alias: {
      '@pkg': path.resolve(__dirname, 'packages'),
      '@': path.resolve(__dirname, 'src'),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  plugins: [
    vue(),
    markdownPlugin({
      highlight: (code: string) => {
        if (code.includes('template')) {
          return hljs.highlight('html', code).value
        } else if (code.includes('lang="ts"')) {
          return hljs.highlight('typescript', code).value
        } else {
          return hljs.highlightAuto(code).value
        }
      },
      // highlight: (code) => hljs.highlightAuto(code).value,
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    }),
    vueDocs(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'docs',
  },
  // build: {
  //   rollupOptions: {
  //     plugins: [analyze({
  //       summaryOnly: true,
  //       limit: 10
  //     })],
  //   },
  // },
}
