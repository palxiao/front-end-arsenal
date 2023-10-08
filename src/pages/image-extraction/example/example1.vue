<template>
  <comp />
</template>

<script lang="ts">
import comp from '@pkg/image-extraction/index'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { comp },
  setup() {
    return {}
  },
})
</script>
