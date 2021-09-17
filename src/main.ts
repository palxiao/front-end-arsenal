/*
 * @Author: ShawnPhang
 * @Date: 2021-09-02 15:36:56
 * @Description: 
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-17 15:24:45
 * @site: book.palxp.com / blog.palxp.com
 */
import { createApp } from 'vue';
import router from './router/index';
import App from './App.vue';
import './assets/tomorrow-night-blue.css';

import { initVueDocsDemo } from "virtual:vite-plugin-vue-docs";

const app = createApp(App);
app.use(router);
app.use(initVueDocsDemo);
app.mount('#app');

