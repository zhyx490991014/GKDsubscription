import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sjm.xiaodesecond.mw',
  name: '喵物次元',
  groups: [
    {
      key: 1,
      name: '全屏广告-开屏二次弹窗',
      desc: '点击x或跳过',
      quickFind: true,
      activityIds: 'com.sjm.xiaodesecond.mw.MainActivity',
      rules: [
        {
          key: 0,
          name: '全屏广告-1',
          matches:
            'TextView[text="跳过"] <4 @ViewGroup <<n ViewGroup >n TextView[text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/14203319',
            'https://i.gkd.li/import/14203087',
          ],
        },
        {
          key: 1,
          name: '全屏广告-2',
          matches:
            '@ViewGroup < ViewGroup +2 ViewGroup > TextView[text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/14203327',
            'https://i.gkd.li/import/14203600',
          ],
        },
        {
          key: 2,
          name: '全屏广告-3',
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>3 && childCount!=5] >2 ImageView[visibleToUser=true]',
          snapshotUrls: [
              'https://i.gkd.li/import/14345580',
              'https://i.gkd.li/import/14353263',
           ],
        },
      ],
    },
  ],
});
