<!--
 * @Author: ShawnPhang
 * @Date: 2021-09-02 15:36:56
 * @Description: 
 * @LastEditors: ShawnPhang
 * @LastEditTime: 2021-09-11 16:09:51
 * @site: book.palxp.com / blog.palxp.com
-->
<template>
  <router-view />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

h4 {
  margin: 1em 0;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: transparent;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 6px;
  background: #bbb;
  background-clip: padding-box;
}
</style>
