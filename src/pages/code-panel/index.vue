<!--
 * @Author: ShawnPhang
 * @Date: 2023-05-29 16:14:47
 * @Description: 
 * @LastEditors: ShawnPhang <site: book.palxp.com>
 * @LastEditTime: 2023-05-29 17:44:25
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
        {
          name: 'CHANGELOG',
          introduce: '更新日志',
        },
      ],
      exampleList: [
        {
          name: '基础演示',
          introduce: '',
        },
      ],
    }
  },
})
</script>
