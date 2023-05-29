<template>
  <ScrollWrap v-slot="props" background="#98bec8" :long="1000" :listen="listen">
    <div class="content">{{ percentage(props.progress) }}</div>
  </ScrollWrap>
  <ScrollWrap v-slot="props" background="#e8c3b9" :long="1200" :listen="listen">
    <div class="content">{{ percentage(props.progress) }}</div>
  </ScrollWrap>
  <ScrollWrap v-slot="props" background="#9ba5b6" :long="1000" :listen="listen">
    <div class="content">{{ percentage(props.progress) }}</div>
  </ScrollWrap>
  <iframe src="/#/docs/scroll-wrap/-scroll-wrap?preview=true" frameborder="0"></iframe>
</template>

<script lang="ts">
import ScrollWrap from '@pkg/scroll-wrap/ScrollWrap.vue'
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  components: { ScrollWrap },
  setup() {
    const percentage = (p: any) => (p * 100).toFixed(2) + '%'
    const listen: any = ref(window)
    onMounted(() => {
      // 指定了特定的滚动元素，如不指定则默认为window
      listen.value = document.querySelector('.example-content')
    })
    return {
      listen,
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
