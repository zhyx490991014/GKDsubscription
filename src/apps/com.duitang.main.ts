import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.duitang.main',
  name: '堆糖',
  deprecatedKeys: [1],
  groups: [
    {
      name: '首页-推荐浏览广告',
      desc: '关闭推荐浏览页面广告',
      key: 2,
      activityIds: ['com.duitang.main.business.main.NAMainActivity'],
      quickFind: true,
      rules: [
        {
          matches: '[id="com.duitang.main:id/adOptionEntry"]',
          snapshotUrls: 'https://i.gkd.li/import/13202725',
        },
      ],
    },
    {
      name: '去商店评分',
      desc: '点击[下次再说]',
      key: 3,
      actionMaximum: 1,
      quickFind: true,
      activityIds: ['com.miui.home.launcher.Launcher'],
      rules: [
        {
          matches: '[id="com.duitang.main:id/scoreDuitangCancel"]',
          snapshotUrls: 'https://i.gkd.li/import/13203217',
        },
      ],
    },
  ],
});
