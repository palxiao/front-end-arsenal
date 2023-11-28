<template>
  <div style="width: 220px">
    <color-picker v-model:value="innerColor" @change="colorChange" />
    <br />
    颜色结果：
    {{ innerColor }}
    <div :style="{ background: innerColor }" class="testBox"></div>
  </div>
</template>

<script lang="ts">
import ColorPicker from '@pkg/color-picker/index.vue'
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
  components: { ColorPicker },
  setup() {
    const innerColor = ref('#ffffffff')

    const colorChange = (v) => {
      console.log(v)
    }

    return {
      innerColor,
      colorChange,
    }
  },
})
</script>

<style scoped>
.testBox {
  width: 200px;
  height: 200px;
}
</style>
