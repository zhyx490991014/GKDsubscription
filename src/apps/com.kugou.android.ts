import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kugou.android',
  name: '酷狗音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[desc="跳过"||desc="GdtCountDownView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12775410',
            'https://i.gkd.li/i/13426030',
            'https://i.gkd.li/i/13468987',
          ],
        },
        {
          key: 1,
          matches: '[desc="createSkipView"]',
          position: {
            left: 'width * 0.6794',
            top: 'width * 0.3822',
          },
          snapshotUrls: 'https://i.gkd.li/i/14606816',
        },
      ],
    },
    {
      key: 1,
      name: '个人页顶部广告',
      rules: [
        {
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches:
            'ViewGroup[childCount=2] > ImageView + FrameLayout > LinearLayout > ImageView',
          exampleUrls:
            'https://m.gkd.li/87047583/9e150986-2103-4130-a12f-12ed2b07ef90',
          snapshotUrls: 'https://i.gkd.li/i/13558426',
        },
      ],
    },
    {
      key: 2,
      name: 'VIP弹窗',
      rules: [
        {
          matches:
            'RelativeLayout[childCount=2] > View + RelativeLayout[childCount=2] > @ImageView + RelativeLayout',
          exampleUrls:
            'https://m.gkd.li/87047583/84c1379f-5eb1-4982-b27b-35e267594101',
          snapshotUrls: 'https://i.gkd.li/i/13548005',
        },
      ],
    },
  ],
});
