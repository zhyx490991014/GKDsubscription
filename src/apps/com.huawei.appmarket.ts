import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.appmarket',
  name: '华为应用市场',
  groups: [
    {
      key: 1,
      name: '青少年模式',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules:
        '[text="儿童模式"] <<n [id="android:id/topPanel"] +2 [id="android:id/buttonPanel"] >2 [text="知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/14222901',
    },
  ],
});
