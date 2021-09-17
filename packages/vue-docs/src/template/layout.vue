<template>
  <div class="van-doc">
    <custom-header :header="header"></custom-header>
    <template v-if="!preview">
      <custom-nav :navs="navs"></custom-nav>
    </template>
    <div :style="{ paddingLeft: preview ? 0 : '' }" class="van-doc-container van-doc-row">
      <div class="van-doc-content van-doc-content--common">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import CustomNav from 'vite-vue3-docs/dist/template/nav.vue'
import CustomHeader from 'vite-vue3-docs/dist/template/header.vue'
import 'vite-vue3-docs/dist/template/style.css'

export default {
  components: { CustomHeader, CustomNav },
  data() {
    return {
      // @vite-vue3-docs layout nav
      // @vite-vue3-docs layout header
      preview: false,
    }
  },
  created() {
    this.preview = this.$route.query.preview || null
  },
}
</script>
