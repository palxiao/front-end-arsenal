<!--
 * @Author: ShawnPhang
 * @Date: 2023-10-07 23:50:21
 * @Description:  
 * @LastEditors: ShawnPhang <https://m.palxp.cn>
 * @LastEditTime: 2023-10-08 12:41:32
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
      mainName: 'image-extraction',
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
        {
          name: '动态插入',
          introduce: '',
        },
      ],
    }
  },
})
</script>
