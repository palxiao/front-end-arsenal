<!--
 * @Author: ShawnPhang
 * @Date: 2023-05-26 17:09:49
 * @Description: 
 * @LastEditors: ShawnPhang <site: book.palxp.com>
 * @LastEditTime: 2023-05-29 22:35:20
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
        {
          name: 'CHANGELOG',
          introduce: '更新日志',
        },
      ],
      exampleList: [
        {
          name: '基础演示',
          introduce: '展示纯色面板',
          highlight: [
            [1, 5],
            [12, 18],
          ],
        },
        {
          name: '渐变选项',
          introduce: '包含了渐变的选择器',
          highlight: [
            [1, 5],
            [12, 18],
          ],
        },
      ],
    }
  },
})
</script>
