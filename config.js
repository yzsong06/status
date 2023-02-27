// 配置
window.Config = {

  // 站点名
  SiteName: '一只鬆 站点状态监控',

  // 站点链接
  SiteUrl: '/status',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
   'ur1957667-e420334a97b9bc534fa3bcc9',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 14,

  // 导航栏菜单
  Navi: [
    {
      text: '个人博客',
      url: 'https://takagi.icu'
    },
    {
      text: '关于',
      url: 'https://takagi.icu/about'
    }
  ]
};
