const path = require('path');

module.exports = {
  title: 'Vue2组件库',
  themeConfig: {
    nav: [{
      text: '组件',
      link: '/test-default/'
    }, {
      text: 'Github',
      link: ''
    }],
    sidebar: [{
      title: '组件',
      collapsable: false,
      children: ["/test-default/"]
    }]
  },
  chainWebpack: config => {
    const pkgPath = path.resolve(__dirname, '../../../', 'packages');
    config.resolve.modules.add(pkgPath).add('node_modules');
    config.resolve.alias.set('@zaker', pkgPath);
  }
};