import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qq.ac.android',
  name: '腾讯动漫',
  deprecatedKeys: [1],
  groups: [
    {
      key: 2,
      name: '漫画阅读页面-左侧悬浮广告',
      activityIds: 'com.qq.ac.android.reader.comic.ComicReaderActivity',
      rules:
        '[id="com.qq.ac.android:id/operation_ad_view"] > [id="com.qq.ac.android:id/btn_close"]',
      snapshotUrls: ['https://i.gkd.li/i/12707756'],
    },
  ],
});
