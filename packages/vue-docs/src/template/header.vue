<template>
  <div class="van-doc-header">
    <div class="van-doc-row">
      <div class="van-doc-header__top">
        <router-link class="van-doc-header__logo" to="/docs">
          <span>{{ header.title }} </span>
        </router-link>

        <ul class="van-doc-header__top-nav">
          <li class="van-doc-header__top-nav-item">
            <a
              class="van-doc-header__link"
              target="_blank"
              href="https://github.com/palxiao/front-end-arsenal"
            >
              <img src="https://b.yzcdn.cn/vant/logo/github.svg" alt="" />
            </a>

            <a class="van-doc-header__link"> 更新日志 </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    header: Object,
  },
};
</script>
