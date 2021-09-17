<template>
  <div>
    <br /><br /><br /><br />
    <mBtn>
      测试文字slot
    </mBtn>
    <br /><br /><br /><br />
  </div>
  <iframe src="/docs/test/-button?preview=true" frameborder="0"></iframe>
</template>

<script lang="ts">
import mBtn from "../../../../packages/test/Button.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: { mBtn },
  setup() {
    const dialog = ref();
    return {
      dialog,
      handleShowDialog(e: any) {
        dialog.value.open(e.currentTarget);
      },
    };
  },
});
</script>