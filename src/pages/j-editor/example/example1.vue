<template>
  <editor v-model="text" :uploadImages="uploadImages" @save="save" @change="change" />
</template>

<script lang="ts">
import editor from '@pkg/j-editor/index'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: { editor },
  setup() {
    const text = ref('')
    // Ctrl + S 保存事件
    const save = () => {
      console.log('保存事件')
    }
    // 可用于做带防抖的自动保存
    const change = () => {
      console.log('内容改变')
    }
    // 截图粘贴
    const uploadImages = async (files) => {
      console.log(files)
      return [{ url: 'https://xxx', alt: '' }]
    }
    return {
      uploadImages,
      change,
      save,
      text,
    }
  },
})
</script>

<style>
.bytemd {
  height: calc(100vh - 120px);
}
</style>
