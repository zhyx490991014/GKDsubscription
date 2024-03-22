import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wn.app.np',
  name: 'NP管理器',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      rules:
        '[id="android:id/content"] >n FrameLayout[index=2][childCount=1] > ImageView',
      snapshotUrls: 'https://i.gkd.li/i/14722550',
    },
  ],
});
