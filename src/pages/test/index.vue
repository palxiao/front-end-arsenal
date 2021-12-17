<!--
 * @Author: ShawnPhang
 * @Date: 2021-09-03 10:11:49
 * @Description: 
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-26 14:13:22
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
          introduce: '以自身作为打开元素',
          highlight: [],
        },
        // {
        //   name: "Animation Mode",
        //   introduce: "Animate.css动画模式",
        // },
        // {
        //   name: "Slot",
        //   introduce: "插槽",
        // },
      ],
    }
  },
})
</script>
