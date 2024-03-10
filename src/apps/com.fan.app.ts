import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fan.app',
  name: '十六番旅行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      global: true,
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      rules: [
        {
          key: 1,
          matches: '[vid="LinearLayoutSplAd"] >4 View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14548642',
        },
      ],
    },
    {
      key: 1,
      name: '综合广告-广告卡片',
      activityIds: [
        'com.mvvm.view.LazyMapStrategyActivity_TengXun',
        'com.mvc.activity.HomepageActivity2',
      ],
      rules: [
        {
          key: 0,
          matches: '[desc^="dislike"] > View',
          snapshotUrls: 'https://i.gkd.li/i/13258021',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13258015',
        },
        {
          key: 2,
          matches: '@Image < View -2 View >2 View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13258018',
        },
        {
          key: 3,
          matches:
            '[vid="relativeLayout3AdContainer"] >7 [desc^="close-fill"] > View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14548514',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知提示',
      desc: '自动点击“以后再说”',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: '[id="com.fan.app:id/tv_nj_later"]',
      snapshotUrls: 'https://i.gkd.li/i/13601734',
    },
  ],
});
