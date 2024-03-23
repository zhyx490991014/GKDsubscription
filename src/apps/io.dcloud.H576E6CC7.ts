import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'io.dcloud.H576E6CC7',
  name: '鱼泡网',
  groups: [
    {
      key: 1,
      name: '局部广告-信息流广告',
      quickFind: true,
      activityIds: 'com.yupao.entry.MainActivity',
      rules: '[vid="ad_close"]',
      snapshotUrls: 'https://i.gkd.li/i/14731762',
    },
    {
      key: 2,
      name: '局部广告-右侧浮窗广告',
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.yupao.entry.MainActivity',
      rules: '[vid="close"]',
      snapshotUrls: 'https://i.gkd.li/i/14731762',
    },
  ],
});
