import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.appmarket',
  name: '华为应用市场',
  deprecatedKeys: [1],
  groups: [
    {
      key: 2,
      name: '功能类-应用更新页面-点击[查看更多]',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.huawei.appmarket.service.appmgr.view.activity.AppUpdateActivity',
          matches: '[text="查看更多"]',
          exampleUrls:
            'https://m.gkd.li/57941037/e2283b1d-3041-49c5-aca2-7c165c83ce37',
          snapshotUrls: 'https://i.gkd.li/i/14738587',
        },
      ],
    },
  ],
});
