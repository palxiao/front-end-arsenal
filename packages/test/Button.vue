<!--
 * @Author: ShawnPhang
 * @Date: 2021-09-03 10:00:09
 * @Description: 
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-17 19:32:45
 * @site: book.palxp.com / blog.palxp.com
-->
<template>
  <button class="btn">
    <!-- 头部 -->
    <slot name="header" />
    <slot> {{ title }} </slot>
    <!-- 底部 -->
    <slot name="footer" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MButton',
  props: {
    // 参数
    title: {
      type: String,
      default: '标题',
    },
    // 新参数 1
    type: {
      type: [String, Array],
      default: '默认',
      required: true,
    },
    // 新参数 2
    type2: {
      type: [String, Array],
      default: '默认',
    },
    // 新参数 2
    type3: {
      type: [String, Array],
    },
  },
  setup() {
    // console.log("组件加载成功!");
  },
})
</script>
<style lang="scss" scoped>
.btn {
  padding: 4px 10px;
  border: none;
  border-radius: 4px;
  background: greenyellow;
}
</style>