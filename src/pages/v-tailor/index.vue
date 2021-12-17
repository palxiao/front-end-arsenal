<!--
 * @Author: ShawnPhang
 * @Date: 2021-09-26 15:41:01
 * @Description:  
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-26 15:44:26
 * @site: book.palxp.com / blog.palxp.com
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
      mainName: 'v-tailor',
      readmeList: [
        {
          name: 'README',
          introduce: '说明文档',
        },
      ],
      exampleList: [
        {
          name: '测试',
          introduce: '',
          highlight: [],
        },
      ],
    }
  },
})
</script>
