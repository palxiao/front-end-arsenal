<!--
 * @Author: ShawnPhang
 * @Date: 2021-09-03 10:11:49
 * @Description: 
 * @LastEditors: ShawnPhang <site: book.palxp.com>
 * @LastEditTime: 2023-05-26 14:23:01
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
      mainName: 'code-panel',
      readmeList: [
        {
          name: 'README',
          introduce: '说明文档',
        },
      ],
      exampleList: [
        {
          name: '基础演示',
          introduce: 'HTML网页编辑器',
          // highlight: [2, 4, 5, 7, 8, 10, 18, [20, 25]],
        },
      ],
    }
  },
})
</script>
