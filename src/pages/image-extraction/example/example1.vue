<template>
  <comp />
</template>

<script lang="ts">
import comp from '@pkg/image-extraction/index.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { comp },
  setup() {
    return {}
  },
})
</script>
