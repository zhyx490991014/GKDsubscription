import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.netdisk.samsung',
  name: '百度网盘-三星版本',
  deprecatedKeys: [0],
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      actionCdKey: 0,
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        },
        {
          key: -1,
          matches:
            '[childCount=0][visibleToUser=true][(text.length<10 && (text*="跳过" || text*="跳過" || text*="skip" || text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || desc*="跳过" || desc*="skip" || (vid*="count" && vid*="down" && vid!*="countdown" && vid!*="load" && vid!*="add" && vid!*="ead" && vid!*="time")]',
        },
        {
          key: 1,
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7f1babd6-7da3-4733-aca9-80ddf3c0a84e',
          snapshotUrls: 'https://i.gkd.li/i/14596658',
        },
      ],
    },
    {
      key: 1,
      name: '弹窗广告',
      desc: '点击右上角x图标按钮',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules:
        '[id="com.baidu.netdisk.samsung:id/cl_root"] > [id="com.baidu.netdisk.samsung:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12738331',
    },
    {
      key: 2,
      name: '关闭购买套餐卡片广告',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules:
        '[id="com.baidu.netdisk.samsung:id/buy_product_root"] > [id="com.baidu.netdisk.samsung:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/12738388',
    },
    {
      key: 3,
      name: '关闭[专属福利]卡片广告',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules:
        'View[childCount=2] > @TextView[text=""][clickable=true] + TextView[text="专属福利"][clickable=false]',
      snapshotUrls: 'https://i.gkd.li/i/12738404',
    },
    {
      key: 4,
      name: '关闭[今日福利]卡片广告',
      desc: '会员-我的会员-底部卡片广告,点击[去使用]右侧的x关闭图标',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules:
        '@TextView[text=""][clickable=true] - TextView[text="去使用"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/12738449',
    },
  ],
});
