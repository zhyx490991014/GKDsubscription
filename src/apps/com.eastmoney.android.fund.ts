import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.eastmoney.android.fund',
  name: '天天基金',
  groups: [
    {
      key: 1,
      name: '自选页面广告',
      activityIds:
        'com.eastmoney.android.fund.centralis.activity.FundRootActivity',
      rules: [
        'FrameLayout > FrameLayout > ImageView + FrameLayout[childCount=1] > ImageView',
      ],
      snapshotUrls: 'https://i.gkd.li/import/12642387',
    },
    {
      enable: false,
      key: 2,
      name: '自选页面缩写提示信息',
      activityIds:
        'com.eastmoney.android.fund.centralis.activity.FundRootActivity',
      rules: [
        '[desc="表示场内基金的最新价和折价率"] -(2) FrameLayout < FrameLayout + ImageView',
      ],
      snapshotUrls: 'https://i.gkd.li/import/12642387',
    },
    {
      key: 3,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@FrameLayout[clickable=true] - * >2 [desc="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/import/13546927',
    },
    {
      key: 4,
      name: '评价提示',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc="五星好评"] - [desc="下次再说"]',
      snapshotUrls: 'https://i.gkd.li/import/14179501',
    },
  ],
});
