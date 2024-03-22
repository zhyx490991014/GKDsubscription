import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mfcloudcalculate.networkdisk',
  name: '123云盘',
  groups: [
    {
      key: 1,
      name: '全屏广告-应用内广告弹窗',
      activityIds: [
        'com.mfcloudcalculate.networkdisk.activity.AdFreeActivity',
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      matchTime: 10000,
      actionMaximum: 1,
      quickFind: true,
      rules: '[vid="iv_ad_free_gif"] + * > [text="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/14696860',
    },
    {
      key: 2,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      global: true,
      rules: [
        {
          key: 1,
          quickFind: true,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="com.mfcloudcalculate.networkdisk:id/frame_ad_splash_container"]',
          snapshotUrls: 'https://i.gkd.li/i/14018247',
        },
      ],
    },
  ],
});
