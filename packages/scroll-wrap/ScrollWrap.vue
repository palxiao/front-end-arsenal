<!--
 * @Author: ShawnPhang
 * @Date: 2022-12-18 22:40:14
 * @Description: 滚动组件
 * @LastEditors: ShawnPhang <site: book.palxp.com>
 * @LastEditTime: 2023-01-03 17:43:38
-->

<template>
  <div ref="wrap" class="sticky">
    <div ref="el" :style="{ height: wh + 'px', background }" :class="['box', { 'release-scroll': relative }]">
      <!-- 插入内容 -->
      <slot :progress="scroll"></slot>
    </div>
    <div ref="body" :style="'height:' + long + 'px;'"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from 'vue'
import scrollListener from './scrollListener'

export default defineComponent({
  name: 'ScrollWrap',
  props: {
    // 参数
    long: {
      type: [String, Number],
      default: '0',
    },
    // 背景样式
    background: {
      type: String,
      default: '',
    },
    // 指定监听滚动元素
    listen: {
      type: HTMLDocument,
      default: window,
    },
  },
  emits: ['done'],
  setup(props, context) {
    const wh = document.documentElement.clientHeight || document.body.clientHeight
    const relative = ref(false)
    const startIndex = ref(0)
    const endIndex = ref(0)
    const wrap = ref(null)
    const el: any = ref(null)
    const body: any = ref(null)
    const url = ref('')
    const scroll: any = ref(0)

    onMounted(async () => {
      await nextTick()
      startIndex.value = el.value.offsetTop
      endIndex.value = startIndex.value + parseInt(String(props.long), 10)

      scrollListener(props.listen, (distance: any) => {
        let process = 0
        if (distance > startIndex.value && distance <= endIndex.value) {
          process = (distance - startIndex.value) / (endIndex.value - startIndex.value)
          // context.emit("update:modelValue", process);
          scroll.value = process
          relative.value = false
          el.value.style.top = 0
        } else if (distance > endIndex.value) {
          context.emit('done') // 完成回调函数
          scroll.value = 1
          relative.value = true
          if (el.value) {
            el.value.style.top = body.value.offsetHeight + 'px'
          }
        }
      })
    })

    return {
      wh,
      relative,
      startIndex,
      endIndex,
      wrap,
      el,
      body,
      url,
      scroll,
    }
  },
})
</script>

<style scoped>
.box {
  background-repeat: repeat-x;
  width: 100%;
  position: sticky;
  height: 100%;
  overflow: hidden;
}
.release-scroll {
  position: relative !important;
}
</style>
