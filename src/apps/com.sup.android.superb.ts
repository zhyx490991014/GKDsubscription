import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sup.android.superb',
  name: '皮皮虾',
  deprecatedKeys: [1],
  groups: [
    {
      key: 2,
      name: '局部广告-信息流广告',
      desc: '伪装正常内容广告',
      activityIds: 'com.sup.android.base.MainActivity',
      quickFind: true,
      rules: '@[text="关闭广告"] + RelativeLayout > [text="立即下载"]',
      exampleUrls:
        'https://m.gkd.li/101449500/dc714565-6636-415c-80a2-8df0e0a8935e',
      snapshotUrls: 'https://i.gkd.li/i/14471889',
    },
    {
      key: 5,
      name: '请求开启通知权限弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="开启推送通知"] +2 * > [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/i/13691081',
    },
    {
      key: 6,
      name: '右上角红包悬浮窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.sup.android.base.MainActivity',
      rules:
        'FrameLayout > RelativeLayout > @ImageView[clickable=true] + ImageView',
      snapshotUrls: 'https://i.gkd.li/i/13624220',
    },
    {
      key: 7,
      quickFind: true,
      name: '更新提示',
      desc: '点击我再想想',
      rules: [
        {
          matches: '[text="发现新版本"] +2 * > [text="我再想想"]',
          snapshotUrls: 'https://i.gkd.li/i/13858490',
        },
      ],
    },
  ],
});
