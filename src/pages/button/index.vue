<!--
 * @Author: ShawnPhang
 * @Date: 2021-09-03 10:11:49
 * @Description: 
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-08 11:26:41
 * @site: book.palxp.com / blog.palxp.com
-->
<template>
  <!-- <example-frame
    :main-name="mainName"
    :readme-list="readmeList"
    :example-list="exampleList"
  /> -->
  <my-button>
    一个按钮
  </my-button>

  <Test />
</template>
<script lang="ts">
import ExampleFrame from "../../components/ExampleFrame.vue";
import Button from '../../../packages/ui-library/button';
import { defineComponent } from "vue";

export default defineComponent({
  components: { ExampleFrame, myButton: Button },
  setup() {
    return {
      readmeList: [
        {
          name: "README",
          introduce: "说明d文档",
        },
      ],
    //   exampleList: [
    //     {
    //       name: "Basic",
    //       introduce: "默认",
    //     },
    //     {
    //       name: "Self Open",
    //       introduce: "以自身作为打开元素",
    //     },
    //     {
    //       name: "Animation Mode",
    //       introduce: "Animate.css动画模式",
    //     },
    //     {
    //       name: "Slot",
    //       introduce: "插槽",
    //     },
    //   ],
    };
  },
});
</script>
