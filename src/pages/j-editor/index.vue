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
      mainName: 'j-editor',
      readmeList: [
        {
          name: 'README',
          introduce: '说明文档',
        },{
          name: 'CHANGELOG',
          introduce: '更新日志',
        },
      ],
      exampleList: [
        {
          name: '基础演示',
          introduce: ''
        },
      ],
    }
  },
})
</script>