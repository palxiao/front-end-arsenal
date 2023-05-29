<!--
 * @Author: ShawnPhang
 * @Date: 2023-01-03 12:12:20
 * @Description: 
 * @LastEditors: ShawnPhang <site: book.palxp.com>
 * @LastEditTime: 2023-05-25 18:14:45
-->
<template>
  <Test />
</template>

<script lang="ts">
import Test from '@pkg/code-panel/code.vue'
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  components: { Test },
  setup() {
    onMounted(() => {})
    return {}
  },
})
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 3vw;
  font-weight: 600;
}
</style>
