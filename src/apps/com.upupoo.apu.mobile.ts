import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.upupoo.apu.mobile',
  name: 'UPUPOO动态壁纸',
  deprecatedKeys: [1],
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules:
        'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
      snapshotUrls: [
        'https://i.gkd.li/import/13830230',
        'https://i.gkd.li/import/14052232',
      ],
    },
  ],
});
