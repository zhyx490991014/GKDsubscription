import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'make.more.r2d2.cellular_z',
  name: 'Cellular-Z',
  deprecatedKeys: [2],
  groups: [
    {
      key: 0,
      name: '开屏广告',
      resetMatch: 'app',
      global: true,
      actionMaximum: 1,
      matchTime: 10000,
      actionCdKey: 0,
      actionMaximumKey: 0,
      rules: [
        {
          key: 1,
          name: '字节广告SDK',
          matches:
            'TextView - @View[clickable=true] <n FrameLayout <2 FrameLayout[childCount=2]', // 字节开屏通用规则
          snapshotUrls: 'https://i.gkd.li/i/13978978',
        },
      ],
    },
  ],
});
