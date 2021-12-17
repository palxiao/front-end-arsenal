<template>
  <button class="btn">
    <slot> 按钮 </slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MButton',
  setup() {
    console.log('组件加载成功!')
  },
})
</script>
<style lang="scss" scoped>
.btn {
  padding: 4px 10px;
  border: none;
  border-radius: 4px;
  background: greenyellow;
}
</style>