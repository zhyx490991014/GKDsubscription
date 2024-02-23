import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'air.tv.douyu.android',
  name: '斗鱼',
  deprecatedKeys: [0, 1, 2],
  groups: [
    {
      key: 3,
      name: '局部广告-直播间广告',
      activityIds: 'tv.douyu.view.activity.PlayerActivity',
      rules: [
        {
          key: 0,
          matches:
            'ImageView < ViewGroup + @ViewGroup[childCount=1] > ImageView', //添加childCount=1避免【全屏播放-设置】误触
          snapshotUrls: [
            'https://i.gkd.li/i/12892825',
            'https://i.gkd.li/i/13037239',
          ],
        },
        {
          key: 1,
          matches: 'ViewPager[childCount=3] + @View + ImageView + View',
          snapshotUrls: [
            'https://i.gkd.li/i/12892825',
            'https://i.gkd.li/i/14208369', //不限定childCount=3误触
          ],
        },
        {
          key: 2,
          matches:
            'RelativeLayout[childCount=3] > ViewPager + @View + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13056107',
        },
        {
          key: 3,
          matches:
            'ViewGroup[childCount=4] > View + ImageView + FrameLayout + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13056107',
        },
        {
          key: 4,
          matches:
            'FrameLayout[childCount=2] > @ImageView - FrameLayout > RelativeLayout > WebView',
          snapshotUrls: 'https://i.gkd.li/i/13056107',
        },
      ],
    },
  ],
});
