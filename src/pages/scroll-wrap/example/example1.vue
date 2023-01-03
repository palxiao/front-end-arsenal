<template>
  <ScrollWrap v-slot="props" background="#98bec8" :long="1000">
    <div class="content">{{ percentage(props.progress) }}</div>
  </ScrollWrap>
  <ScrollWrap v-slot="props" background="#e8c3b9" :long="1200">
    <div class="content">{{ percentage(props.progress) }}</div>
  </ScrollWrap>
  <ScrollWrap v-slot="props" background="#9ba5b6" :long="1000">
    <div class="content">{{ percentage(props.progress) }}</div>
  </ScrollWrap>
  <iframe src="/docs/scroll-wrap/-scroll-wrap?preview=true" frameborder="0"></iframe>
</template>

<script lang="ts">
import ScrollWrap from '../../../../packages/scroll-wrap/ScrollWrap.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { ScrollWrap },
  setup() {
    const percentage = (p: any) => (p * 100).toFixed(2) + '%'
    return {
      percentage,
    }
  },
})
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 3vw;
  font-weight: 600;
}
</style>
