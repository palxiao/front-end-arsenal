<!--
 * @Author: ShawnPhang
 * @Date: 2021-09-03 10:11:49
 * @Description: 
 * @LastEditors: ShawnPhang <site: book.palxp.com>
 * @LastEditTime: 2023-01-03 11:29:16
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
      mainName: 'test',
      readmeList: [
        {
          name: 'README2',
          introduce: '说明d文档',
        },
      ],
      exampleList: [
        {
          name: 'Basic',
          introduce: '默认',
          highlight: [4, 7, [14, 24], 11],
        },
        {
          name: 'Self Open',
          introduce: 'sadsadassad',
          highlight: [],
        },
        {
          name: 'Test 3',
          introduce: 'abcdsasd',
          highlight: [4, [14, 24], 11],
        },
      ],
    }
  },
})
</script>
