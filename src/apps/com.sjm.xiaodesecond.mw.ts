import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sjm.xiaodesecond.mw',
  name: '喵物次元',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      quickFind: true,
      activityIds: 'com.sjm.xiaodesecond.mw.MainActivity',
      rules: [
        {
          key: 0,
          name: '弹窗广告-1',
          desc: '点击左上角跳过',
          matches:
            '@TextView[text="跳过"] <<n  ViewGroup >n TextView[text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/14203319',
            'https://i.gkd.li/import/14203087',
          ],
        },
        {
          key: 1,
          name: '弹窗广告-2',
          desc: '点击左上角x',
          matches:
            '@ImageView <<2 ViewGroup +2 ViewGroup > TextView[text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/14203327',
            'https://i.gkd.li/import/14203600',
          ],
        },
      ],
    },
  ],
});
