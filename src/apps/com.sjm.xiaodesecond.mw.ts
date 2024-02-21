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
            'ImageView - FrameLayout >3 ImageView < @FrameLayout[childCount=1] <n * +2 * >2 TextView[text="去逛逛"]',
          snapshotUrls: ['https://i.gkd.li/import/14345580'],
        },
        {
          key: 3,
          name: '全屏广告-4',
          matches:
            'ImageView - FrameLayout >2 ImageView < @FrameLayout[childCount=1] + * >2 TextView[text="进入小程序"]',
          snapshotUrls: ['https://i.gkd.li/import/14353263'],
        },
      ],
    },
  ],
});
