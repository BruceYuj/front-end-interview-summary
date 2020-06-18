const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headConf.js');
// var  {sidebars} =  require('./sidebarHelper/index.js')
// console.log(sidebars.length)

module.exports = {
    title: 'BY 的前端笔记',
    head: headConf,
    description: 'a repo about notes',
    base: '/front-end-interview-summary/',
    themeConfig: {
      nav: navConf,
      repo: 'https://github.com/BruceYuj/front-end-interview-summary',
      repoLabel: 'Github',
      docsDir: 'docs',
      docsBranch: 'master',
      editLinks: true,
      editLinkText: '在 Github 上改善此页面',
      lastUpdated: '最后更新时间'
    },
    plugins: pluginConf
  }