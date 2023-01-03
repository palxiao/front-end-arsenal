<!--
 * @Author: ShawnPhang
 * @Date: 2021-09-03 10:11:49
 * @Description: 
 * @LastEditors: ShawnPhang <site: book.palxp.com>
 * @LastEditTime: 2023-01-03 14:21:21
 * @site: book.palxp.com / blog.palxp.com
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
      ],
      exampleList: [
        {
          name: '基础演示',
          introduce: '分段滚动页面',
          highlight: [2, 4, 5, 7, 8, 10, 18],
        },
      ],
    }
  },
})
</script>
