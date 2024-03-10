import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.weico.international',
  name: '微博轻享版',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '@[clickable=true] + * > [text="跳过"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/e1253f77-cfdd-42ea-b6c2-05732a9e347a',
          snapshotUrls: [
            'https://i.gkd.li/i/14549281',
            'https://i.gkd.li/i/14549328', // 小窗模式下全局规则触发无效
          ],
        },
      ],
    },
    {
      key: 0,
      name: '推荐流广告',
      desc: '主页,搜索页',
      activityIds: [
        'com.weico.international.activity.MainFragmentActivity',
        'com.weico.international.ui.search.SearchActivity',
      ],
      exampleUrls:
        'https://github.com/gkd-kit/subscription/assets/38517192/e713a2ca-5048-486a-874f-dd876d53c49b',
      rules: [
        {
          preKeys: [1],
          name: '点击不感兴趣',
          matches: '@View > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12505755',
            'https://i.gkd.li/i/12505764',
          ],
        },
        {
          key: 0,
          name: '点击广告卡片右上角[x]',
          matches: '[id="com.weico.international:id/item_timeline_ad_action"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12505753',
            'https://i.gkd.li/i/12505763',
            'https://i.gkd.li/i/12857202',
          ],
        },
      ],
    },
  ],
});
