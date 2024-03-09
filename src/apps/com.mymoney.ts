import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mymoney',
  name: '随手记',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      global: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      desc: '点击跳过',
      rules: [
        {
          key: 1,
          matches:
            '@View[clickable=true] <3 * <2 * < FrameLayout[id="com.mymoney:id/external_ad_content"]',
          snapshotUrls: 'https://i.gkd.li/i/13855760',
        },
      ],
    },
  ],
});
