<template>
  <div style="width: 220px">
    <color-picker v-model:value="innerColor" @native-pick="colorChange" />
  </div>
</template>

<script lang="ts">
import ColorPicker from '@pkg/color-picker/index.vue'
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
  components: { ColorPicker },
  setup() {
    const innerColor = ref('#ffffffff')

    const colorChange = (c) => {
      console.log('来自吸取颜色：' + c)
    }

    return {
      innerColor,
      colorChange,
    }
  },
})
</script>
