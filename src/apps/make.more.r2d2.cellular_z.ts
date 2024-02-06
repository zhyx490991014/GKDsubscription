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
      actionMaximum: 1,
      matchTime: 10000,
      actionCdKey: 0,
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          quickFind: true,
          name: '全局规则-1',
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13987038',
        },
        {
          key: 1,
          name: '字节广告SDK',
          matches:
            'TextView - @View[clickable=true] <n FrameLayout <2 FrameLayout[childCount=2]', // 字节开屏通用规则
          snapshotUrls: 'https://i.gkd.li/import/13978978',
        },
        {
          key: 2,
          name: '全局规则-2',
          matches:
            '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳過"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down" && vid!*="download") || desc*="跳过" || desc*="skip"]',
        },
      ],
    },
  ],
});
