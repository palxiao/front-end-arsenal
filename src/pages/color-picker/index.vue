<!--
 * @Author: ShawnPhang
 * @Date: 2023-05-26 17:09:49
 * @Description: 
 * @LastEditors: ShawnPhang <site: book.palxp.com>
 * @LastEditTime: 2023-05-29 15:15:21
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
      mainName: 'color-picker',
      readmeList: [
        {
          name: 'README',
          introduce: '说明文档',
        },
      ],
      exampleList: [
        {
          name: '基础演示',
          introduce: '描述',
          highlight: [[1, 5], 8, [12, 18]],
        },
      ],
    }
  },
})
</script>
