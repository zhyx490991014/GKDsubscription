import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xyhui',
  name: 'PU口袋校园',
  deprecatedKeys: [4],
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 1,
          name: '腾讯广告',
          activityIds: [
            'com.xyhui.start.PUMainActivity',
            'com.xyhui.start.LoadingActivity',
            'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity',
          ],
          matches:
            '[id="android:id/content"] >n FrameLayout[index=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/12643276',
            'https://i.gkd.li/i/12868503',
            'https://i.gkd.li/i/12646541', // 华为手机的快照，activityId = 'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity'
            'https://i.gkd.li/i/13259194',
          ],
        },
        {
          key: 5,
          name: '快手广告',
          activityIds: 'com.xyhui.start.LoadingActivity',
          matches:
            '[text="广告"] <n * < * < ViewGroup - ViewGroup >n @ViewGroup > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/13259196',
            'https://i.gkd.li/i/13259198',
          ],
        },
        {
          key: 6,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: [
            '[desc^="logo-union"] > [desc^="logoad"] > [text="广告"]',
            '[desc^="webview-close"] > View',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13259183',
        },
        {
          key: 7,
          name: '美数广告',
          activityIds: 'com.meishu.sdk.activity.SdkInterstitialActivity',
          matches: ['[id="com.xyhui:id/ms_activity_sdk_interstitial_cacel"]'],
          snapshotUrls: 'https://i.gkd.li/i/13458692',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-首页-右侧浮窗广告',
      quickFind: true,
      activityIds: [
        'com.xyhui.start.PUMainActivity',
        'com.xyhui.start.LoadingActivity',
      ],
      rules: 'ImageView[id="com.xyhui:id/deleteIv"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12846543',
        'https://i.gkd.li/i/12868119',
      ],
    },
    {
      enable: false,
      key: 3,
      name: '更新提示',
      quickFind: true,
      activityIds: [
        'com.xyhui.start.PUMainActivity',
        'com.xyhui.start.LoadingActivity',
      ],
      rules: 'ImageView[id="com.xyhui:id/closeIv"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12908853',
        'https://i.gkd.li/i/12908865',
      ],
    },
  ],
});
