<template>
  <div style="width: 220px">
    <color-picker v-model:value="innerColor" :modes="['纯色']" @native-pick="colorChange" />
  </div>
</template>

<script lang="ts">
import ColorPicker from '@pkg/color-picker/index.vue'
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
  components: { ColorPicker },
  setup() {
    const innerColor = ref('#ffffffff')

    const dropColor = async (e: any) => {
      if (e) {
        colorChange(e)
      } else {
        const eyeDropper = new window.EyeDropper() // 初始化一个EyeDropper对象
        // toolTip('按Esc可退出')
        try {
          const result = await eyeDropper.open() // 开始拾取颜色
          const colorHexValue = result.sRGBHex
          innerColor.value = colorHexValue + 'ff'
        } catch (e) {
          console.log('用户取消了取色')
        }
      }
    }

    // const colorChange = debounce(150, false, async (e) => {
    //   state.innerColor = e + (e.length === 7 ? 'ff' : '')
    // })
    const colorChange = (e) => {
      innerColor.value = e + (e.length === 7 ? 'ff' : '')
    }

    return {
      dropColor,
      innerColor,
      colorChange,
    }
  },
})
</script>
