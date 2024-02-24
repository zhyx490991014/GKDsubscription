import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.shop',
  name: '小米商城',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页弹窗广告',
      activityIds: [
        'com.xiaomi.shop.plugin.homepage.utils.AdDialog',
        'com.xiaomi.shop2.activity.MainActivity',
      ],
      rules: '[id="android:id/content"] >3 ImageView[index=1][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/i/12649330',
        'https://i.gkd.li/i/14393044',
      ],
    },
  ],
});
