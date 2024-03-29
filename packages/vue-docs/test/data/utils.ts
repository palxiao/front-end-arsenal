// @ts-nocheck

export function defineComponent(content, template) {
  return `<template>${template}</template><script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  ${content}
})
</script>`
}

export function exportDefault(content, template) {
  return `<template>${template}</template><script lang="ts">
import { ref, defineComponent } from 'vue'
import { xxxx } from '../none'
export default {
  name: 'HelloWorld',
  ${content}
}
</script>`
}

export function defineSetup(content, template) {
  return `<template>${template}</template><script setup>
  ${content}
</script>`
}
