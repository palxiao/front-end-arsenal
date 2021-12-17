<template>
  <div class="rateContainer">
    <div
      class="star"
      :class="{ pointer: !disabled }"
      v-for="item in max"
      :key="item"
      @mouseenter="mouseenter(item)"
      @mouseleave="mouseleave(item)"
      @click="click(item)"
    >
      <img
        :src="
          (hoverRate === -1 && value >= item) ||
          (hoverRate !== -1 && hoverRate >= item)
            ? starActoveImg
            : starImg
        "
        alt=""
      />
    </div>
  </div>
</template>

<script>
const starImg = require("../assets/star.png");
const starActoveImg = require("../assets/starActive.png");

export default {
  name: "Rate",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    // 双向绑定的分值
    value: {
      type: Number,
    },

    // 最大分值
    max: {
      type: Number,
      default: 5,
    },

    // 是否为只读
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      starImg,
      starActoveImg,
      hoverRate: -1,
    };
  },
  methods: {
    mouseenter(index) {
      if (this.disabled) {
        return;
      }
      this.hoverRate = index;
      // 鼠标覆盖事件
      this.$emit("hover", index);
    },

    mouseleave(index) {
      if (this.disabled) {
        return;
      }
      this.hoverRate = -1;
    },
    // @vuese
    // 点击方法
    click(index) {
      if (this.disabled) {
        return;
      }
      this.hoverRate = -1;
      // 数值改变
      // @arg 返回数组下标
      this.$emit("change", index);
    },
  },
};
</script>

<style lang="less" scoped>
.rateContainer {
  display: flex;

  .star {
    padding-right: 8px;

    &.pointer {
      cursor: pointer;
    }

    &:last-of-type {
      padding-right: 0;
    }
  }
}
</style>
