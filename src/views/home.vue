<!--
 * @Author: ShawnPhang
 * @Date: 2021-09-02 15:36:56
 * @Description: 
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-26 14:43:34
 * @site: book.palxp.com / blog.palxp.com
-->
<template>
  <div id="Home">
    <readme-frame :readme="readme" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReadmeFrame from '../components/ReadmeFrame.vue'
import readme from '../../README.md'
// const isHashRouterMode = import.meta.env.VITE_ROUTER_MODE === 'hash';
// const isProd = import.meta.env.PROD
export default defineComponent({
  name: 'Home',
  components: {
    ReadmeFrame,
  },
  setup() {
    return {
      readme,
    }
  },
})
</script>
