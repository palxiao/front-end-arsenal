
<template>
  <button>
    <!-- 按钮插槽 -->
    <slot>按钮</slot>
  </button>
</template>

<script>
export default {
  name: 'ZkButtonTest',
  props: {
    // 按钮失效状态
    disabled: {
      type: Boolean,
      default: false
    },
    // 设置 button 原生的 type 值，可选值请参考 HTML 标准
    htmlType : {}
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="less" scoped>
@import url('./style.less');
</style>
