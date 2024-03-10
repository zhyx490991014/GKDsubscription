import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 1,
      name: '更新提示',
      rules: [
        {
          key: 0,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '[text*="新版本"] - ImageView < LinearLayout < LinearLayout + ImageButton[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12642017',
        },
        {
          key: 1,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: '@Image + Image +n [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/13195645',
        },
      ],
    },
    {
      key: 13,
      name: '通知提示',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
      rules: [
        {
          matches:
            'FrameLayout > ViewGroup[vid="pdd"] > ViewGroup > ViewGroup > ViewGroup[childCount=3 || childCount=2] >(1,2) ImageView[clickable=true][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/8f376a1e-750f-4677-af82-473f3522b67c',
          snapshotUrls: [
            'https://i.gkd.li/i/14109435',
            'https://i.gkd.li/i/14549423',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页优惠弹窗',
      rules: [
        {
          key: 0,
          name: '首页优惠弹窗1',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            'FrameLayout > FrameLayout > RelativeLayout[childCount=2] > @ImageView[id!=null][clickable=true][visibleToUser=true] + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12642015',
        },
        {
          key: 1,
          name: '首页优惠弹窗2',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            'View[id=null] > TextView + View > View +(4) View[clickable=true] > Image[id=null]',
          snapshotUrls: 'https://i.gkd.li/i/12642019',
        },
        {
          key: 2,
          name: '首页优惠弹窗3',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            'ImageView < @ViewGroup[clickable=true][visibleToUser=true] < ViewGroup + ViewGroup >7 [text="开心收下"]',
          snapshotUrls: 'https://i.gkd.li/i/13761182',
        },
      ],
    },
    {
      key: 3,
      name: '活动弹窗',
      rules: [
        {
          key: 0,
          name: '抽免单活动1',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'TextView[text="免单特权"] < View < View +(5) View[clickable=true] > Image[id=null]',
          snapshotUrls: 'https://i.gkd.li/i/12642032',
        },
        {
          key: 1,
          name: '抽免单活动2',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'TextView[text$="抽免单"] -(2) Image[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12642038',
        },
        {
          key: 2,
          name: '下单后追加订单',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: '@[text="关闭弹窗"][clickable=true] + [text$="下单成功"]',
          snapshotUrls: 'https://i.gkd.li/i/13308175',
        },
      ],
    },
    {
      key: 4,
      name: '红包弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup > ImageView + ViewGroup > ImageView +(2) FrameLayout > TextView[text="专属现金红包"]',
          snapshotUrls: 'https://i.gkd.li/i/12642023',
        },
        {
          key: 1,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          quickFind: true,
          matches:
            '@ImageView[clickable=true] < ViewGroup + ViewGroup >n [text="送你大额现金"]',
          snapshotUrls: 'https://i.gkd.li/i/13625441',
        },
        {
          key: 2,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '[text="百亿补贴"] > View > View > @View[clickable=true] +n [text^="立即领取"]',
          snapshotUrls: 'https://i.gkd.li/i/13669963',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-多多买菜抽奖弹窗',
      activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
      rules: [
        'View[childCount=1] > Button[id=null][text="关闭弹窗"][clickable=true]',
      ], //添加父节点条件。原规则会与退换货选择货物弹窗冲突。https://i.gkd.li/i/13830730
      snapshotUrls: ['https://i.gkd.li/i/12642053'],
    },
    {
      key: 6,
      name: '多多视频悬浮窗广告',
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        '@TextView[id=null][clickable=true] + Image[id=null][text="webp"]',
        '@TextView[id=null][clickable=true] + View > Image[text="webp"]',
      ],
      snapshotUrls: ['https://i.gkd.li/i/12642058'],
    },
    {
      key: 7,
      name: '多多视频每日签到弹窗',
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        '@ImageView[id=null] < ViewGroup < ViewGroup +(2) ViewGroup >(n) [text^="每日签到"]',
        'ViewGroup[childCount=5] > @ViewGroup[index=0][clickable=true] +3 ViewGroup >2 [text="分享现金红包至拼小圈"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/i/12700615',
        'https://i.gkd.li/i/13804657', //规则2
      ],
    },
    {
      key: 8,
      name: '局部广告-商品详情页视频讲解窗口',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '[vid="iv_float_window_close"] > TextView[text=""][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/560162d0-940d-413a-8f2e-e40c21c976e2',
          snapshotUrls: 'https://i.gkd.li/i/14549415',
        },
      ],
    },
    {
      key: 9,
      name: '多多视频每日自动签到',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,

      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        {
          key: 0,
          name: '自动签到',
          action: 'clickCenter',
          matches: ['FrameLayout > TextView[text="领取今日现金"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13201422', //com.xunmeng.pinduoduo.ui.activity.HomeActivity
            'https://i.gkd.li/i/13372677', //com.bbk.launcher2.Launcher
          ],
        },
        {
          key: 1,
          preKeys: [0],
          name: '在签到后关闭弹窗',
          action: 'clickCenter',
          matches: ['FrameLayout > TextView[text="明日继续来领"]'],
          snapshotUrls: 'https://i.gkd.li/i/13205634',
        },
      ],
    },
    {
      key: 10,
      name: '局部广告-多多视频-划到广告自动跳过',
      desc: '点击返回自动刷新，从而跳过广告',
      quickFind: true,
      activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
      rules: [
        {
          key: 0,
          matches: [
            'TextView[text="正在直播"]',
            '@ImageView[desc="返回"] <4 ViewGroup <<3 FrameLayout[id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13446291',
        },
        {
          key: 1,
          actionMaximumKey: 0,
          matches: [
            'TextView[text="查看更多低价商品"]',
            '@ImageView[desc="返回"] <4 ViewGroup <<3 FrameLayout[id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13791119',
        },
        {
          key: 2,
          actionMaximumKey: 0,
          matches: [
            'TextView[text^="必得"] < FrameLayout - FrameLayout > TextView[text="下单"]',
            '@ImageView[desc="返回"] <4 ViewGroup <<3 FrameLayout[id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13852257',
        },
      ],
    },
    {
      key: 11,
      name: '功能类-自动点击原图',
      activityIds:
        'com.xunmeng.pinduoduo.app_album.album.MultiImageSelectorActivity',
      quickFind: true,
      rules: '@[text="原图"][checked=false] + [text="发送"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13925378', // checked=false
        'https://i.gkd.li/i/13925380', // checked=true
      ],
    },
    {
      key: 12,
      quickFind: true,
      name: '全屏广告-下单成功邀请好友弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageMaskActivity',
          matches: '[id="com.xunmeng.pinduoduo:id/pdd"] >7 [text="关闭弹窗"]',
          snapshotUrls: 'https://i.gkd.li/i/13927594',
        },
      ],
    },
  ],
});
