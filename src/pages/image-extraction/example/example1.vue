<template>
  <comp />
</template>

<script lang="ts">
import { matting } from '@pkg/image-extraction'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { comp: matting },
  setup() {
    return {}
  },
})
</script>
