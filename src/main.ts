/*
 * @Author: ShawnPhang
 * @Date: 2021-09-02 15:36:56
 * @Description:
 * @LastEditors: ShawnPhang <site: book.palxp.com>
 * @LastEditTime: 2023-01-03 11:04:11
 * @site: book.palxp.com / blog.palxp.com
 */
import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import './assets/tomorrow-night-blue.css'

import { initVueDocsDemo } from 'virtual:vite-vue3-docs'

const app = createApp(App)
app.use(router)
app.use(initVueDocsDemo)
app.mount('#app')
