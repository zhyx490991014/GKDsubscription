import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.article.video',
  name: '西瓜视频',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '@[desc="关闭"] - LinearLayout > [text="立即升级"]',
      snapshotUrls: 'https://i.gkd.li/import/13328430',
    },
    {
      key: 2,
      name: '通知弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules:
        '@TextView[id="com.ss.android.article.video:id/sj"][text="暂不开启"]',
      snapshotUrls: 'https://i.gkd.li/import/13456568',
    },
    {
      key: 6,
      name: '红包弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.ss.android.article.video.activity.SplashActivity',
      rules: '@FlattenUIImage[clickable=true] -2 [text="开心收下"]',
      snapshotUrls: 'https://i.gkd.li/import/13620299',
    },
  ],
});
