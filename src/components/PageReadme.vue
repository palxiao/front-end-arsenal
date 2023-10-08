<!--
 * @Author: ShawnPhang
 * @Date: 2021-09-02 15:36:56
 * @Description: 
 * @LastEditors: ShawnPhang <site: m.palxp.cn>
 * @LastEditTime: 2023-05-29 17:36:07
 * @site: m.palxp.cn / blog.palxp.com
-->
<template>
  <div id="Readme">
    <readme-frame :readme="readme"></readme-frame>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ReadmeFrame from './ReadmeFrame.vue'
export default defineComponent({
  name: 'PageReadme',
  components: {
    ReadmeFrame,
  },
  setup() {
    const route = useRoute()
    watch(
      () => route.path,
      (newPath) => {
        setValue()
      },
    )
    const name = (route.name as string).replace('-readme', '').replace('-changelog', '')
    const readme = ref('')
    onMounted(async () => {
      setValue()
    })
    async function setValue() {
      const fileName = (route.name as string).indexOf('changelog') !== -1 ? 'CHANGELOG' : 'README'
      const readmeText = await import(`../../packages/${name}/${fileName}.md`)
      readme.value = readmeText.default
    }
    return {
      readme,
    }
  },
})
</script>
<style lang="scss" scoped></style>
