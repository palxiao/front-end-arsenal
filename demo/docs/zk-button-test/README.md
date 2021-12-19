# ZkButtonTest 演示按钮

## 安装

```bash
$ npm i @zk/zk-button-test
```

## 引入

```bash
import ZkButtonTest from '@zk/zk-button-test'
Vue.use(ZkButtonTest)
```

## 使用

代码演示

<template>
  <code-box title="基础用法" description="">
    <div class="container">
      <ZkButtonTest>默认文字</ZkButtonTest>
    </div>

  </code-box>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
.container {}
</style>

<!-- 代码片段 -->

```vue
<template>
  <code-box title="基础用法" description="">
    <div class="container">
      <ZkButtonTest>默认文字</ZkButtonTest>
    </div>
  </code-box>
</template>

<script></script>

<style lang="less" scoped></style>
```

代码演示

<template>
  <code-box title="基础用法" description="">
    <div class="container">
      <ZkButtonTest>默认文字</ZkButtonTest>
    </div>

  </code-box>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
.container {}
</style>

```vue
<template>
  <code-box title="基础用法" description="">
    <div class="container">
      <ZkButtonTest>默认文字2</ZkButtonTest>
    </div>
  </code-box>
</template>

<script></script>

<style lang="less" scoped></style>
```

<!-- ## API -->

组件使用说明 - ZkButtonTest

## Props

<!-- @vuese:ZkButtonTest:props:start -->

| Name     | Description                                        | Type      | Required | Default |
| -------- | -------------------------------------------------- | --------- | -------- | ------- |
| disabled | 按钮失效状态                                       | `Boolean` | `false`  | false   |
| htmlType | 设置 button 原生的 type 值，可选值请参考 HTML 标准 | —         | `false`  | -       |

<!-- @vuese:ZkButtonTest:props:end -->

## Slots

<!-- @vuese:ZkButtonTest:slots:start -->

| Name    | Description | Default Slot Content |
| ------- | ----------- | -------------------- |
| default | 按钮插槽    | -                    |

<!-- @vuese:ZkButtonTest:slots:end -->
