import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.coloros.gallery3d',
  name: '相册',
  deprecatedKeys: [1],
  groups: [
    {
      key: 6,
      name: '开启相册同步弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.coloros.gallery3d.app.MainActivity',
      rules: '[text="开启相册自动同步，保障相册数据安全"] + [text="忽略"]',
      snapshotUrls: 'https://i.gkd.li/import/13637185',
    },
  ],
});
