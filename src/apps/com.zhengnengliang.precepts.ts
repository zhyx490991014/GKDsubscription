import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhengnengliang.precepts',
  name: '正气',
  deprecatedKeys: [1],
  groups: [
    {
      key: 2,
      name: '第三方 SDK 广告',
      activityIds: [
        'com.zhengnengliang.precepts.ui.activity.MainActivity',
        'com.zhengnengliang.precepts.ui.dialog.DialogTwoButton',
      ],
      rules: '[text="点此去广告"] + ImageButton[clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/12739767',
        'https://i.gkd.li/import/12727705', // activityId: 'com.zhengnengliang.precepts.ui.dialog.DialogTwoButton'
      ],
    },
  ],
});
