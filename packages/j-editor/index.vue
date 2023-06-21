<template>
  <div ref="el"></div>
</template>

<script lang="ts">
import 'bytemd/dist/index.min.css'
import 'juejin-markdown-themes/dist/juejin.min.css'
import 'highlight.js/styles/github.css'
import { defineComponent, onMounted, Ref, ref, watch, onUnmounted } from 'vue'
// @ts-ignore
import { Editor } from 'bytemd'
// @ts-ignore
import zhHans from 'bytemd/lib/locales/zh_Hans.json'
// @ts-ignore
import breaks from '@bytemd/plugin-breaks'
// @ts-ignore
import highlight from '@bytemd/plugin-highlight'
// @ts-ignore
import footnotes from '@bytemd/plugin-footnotes'
// @ts-ignore
import frontmatter from '@bytemd/plugin-frontmatter'
// @ts-ignore
import gfm from '@bytemd/plugin-gfm'
// @ts-ignore
import mediumZoom from '@bytemd/plugin-medium-zoom'
// @ts-ignore
import gemoji from '@bytemd/plugin-gemoji'

export default defineComponent({
  props: {
    // value 数据
    modelValue: {
      type: [String],
    },
    value: String,
    plugins: {
      default: () => [breaks(), highlight(), footnotes(), frontmatter(), gfm(), mediumZoom(), gemoji()],
    },
    sanitize: Function,
    remarkRehype: Object,
    mode: String,
    previewDebounce: Number,
    placeholder: String,
    editorConfig: Object,
    locale: {
      default: zhHans,
    },
    uploadImages: Function,
  },
  emits: [
    // 内容修改回调
    'change',
    'update:modelValue',
    // 触发保存回调
    'save',
  ],
  setup(props, { emit }) {
    const el: Ref<HTMLElement | any> = ref(null)
    const editorRef: Ref<Editor | any> = ref(null)

    watch(
      () => props,
      (newValue) => {
        const copy: any = { ...newValue }
        copy.value = copy.modelValue
        delete copy.modelValue
        for (let k in copy) {
          if (copy[k] === undefined) {
            delete copy[k]
          }
        }
        editorRef.value?.$set(copy)
      },
      { deep: true },
    )

    function save(e: any) {
      if (e.keyCode === 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
        e.preventDefault()
        emit('save')
      }
    }

    onMounted(() => {
      const ED: any = Editor
      const editor: any = new ED({
        target: el.value!,
        props,
      })
      editor.$on('change', (e: any) => {
        emit('change', e.detail.value)
        emit('update:modelValue', e.detail.value)
      })
      editorRef.value = editor

      document.addEventListener('keydown', save)
    })

    onUnmounted(() => {
      document.removeEventListener('keydown', save)
    })

    return { el }
  },
})
</script>
