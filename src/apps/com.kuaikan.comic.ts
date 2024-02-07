import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kuaikan.comic',
  name: '快看漫画',
  deprecatedKeys: [1],
  groups: [
    {
      key: 2,
      name: '漫画界面-底部广告弹窗',
      activityIds: 'com.kuaikan.comic.infinitecomic.view.ComicInfiniteActivity',
      rules: '[id="com.kuaikan.comic:id/adBannerClose"]',
      snapshotUrls: 'https://i.gkd.li/import/12910268',
    },
  ],
});
