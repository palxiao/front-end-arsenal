<!--
 * @Author: ShawnPhang
 * @Date: 2021-09-25 17:33:01
 * @Description:  
 * @LastEditors: ShawnPhang <site: book.palxp.com>
 * @LastEditTime: 2023-05-25 16:41:44
-->

<template>
  <example-frame :main-name="mainName" :readme-list="readmeList" :example-list="exampleList" />
</template>
<script lang="ts">
import ExampleFrame from '@/components/ExampleFrame.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { ExampleFrame },
  setup() {
    return {
      mainName: 'ijs-utils',
      readmeList: [
        {
          name: 'README',
          introduce: '说明文档',
        },
      ],
      exampleList: [
        // {
        //   name: 'Basic',
        //   introduce: '默认',
        //   highlight: [],
        // },
      ],
    }
  },
})
</script>
