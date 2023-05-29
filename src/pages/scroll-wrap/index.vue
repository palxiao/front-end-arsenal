<!--
 * @Author: ShawnPhang
 * @Date: 2023-01-03 12:12:20
 * @Description: 
 * @LastEditors: ShawnPhang <site: book.palxp.com>
 * @LastEditTime: 2023-05-29 17:38:27
-->
<template>
  <example-frame :main-name="mainName" :readme-list="readmeList" :example-list="exampleList" />
</template>
<script lang="ts">
import ExampleFrame from '../../components/ExampleFrame.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { ExampleFrame },
  setup() {
    return {
      mainName: 'scroll-wrap',
      readmeList: [
        {
          name: 'README',
          introduce: '说明文档',
        },
        {
          name: 'CHANGELOG',
          introduce: '更新日志',
        },
      ],
      exampleList: [
        {
          name: '基础演示',
          introduce: '分段滚动页面',
          highlight: [2, 4, 5, 7, 8, 10, 18, [20, 25]],
        },
      ],
    }
  },
})
</script>
