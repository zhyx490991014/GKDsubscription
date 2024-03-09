import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.timesneighborhood.app.c',
  name: '邻里邦',
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      quickFind: true,
      rules: [
        {
          matches: '[text="在线升级"] - [text="取消"]',
          exampleUrls:
            'https://m.gkd.li/101449500/ab0d9ff9-3df2-450f-b779-dc2ba35c7d11',
          snapshotUrls: 'https://i.gkd.li/i/14544998',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-自动点击签到',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.zkty.modules.engine.activity.XEngineWebActivity',
      rules: [
        {
          matches: '[text="立即签到"]',
          exampleUrls:
            'https://m.gkd.li/101449500/58bc6789-3015-450f-9f3d-d98a02edc7f6',
          snapshotUrls: 'https://i.gkd.li/i/14545000',
        },
      ],
    },
  ],
});
