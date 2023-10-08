<template>
  <button @click="open">打开</button>
  <button @click="close">关闭</button>
  <matting v-if="show" :hasHeader="false" @register="mattingStart" />
</template>

<script lang="ts">
import matting from '@pkg/image-extraction/index'
import { MattingType } from '@pkg/image-extraction/index'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: { matting },
  setup() {
    const show = ref(false)

    const open = () => {
      show.value = true
    }
    const close = () => {
      show.value = false
    }

    const mattingStart = ({ initLoadImages, radius, brushSize, constants, getResult }: MattingType) => {
      initLoadImages('https://pic.imgdb.cn/item/65222530c458853aefb0adeb.webp', 'https://pic.imgdb.cn/item/6522253ec458853aefb0b013.webp')
    }
    return {
      mattingStart,
      show,
      open,
      close,
    }
  },
})
</script>
