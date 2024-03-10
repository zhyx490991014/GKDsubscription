import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  deprecatedKeys: [-1, 1, 11],
  groups: [
    {
      key: 0,
      name: '局部广告-阅读页面底部广告',
      activityIds: [
        'com.dragon.read.ad.banner.ui',
        'com.dragon.read.reader.ReaderActivity',
        'com.dragon.read.reader.ui.ReaderActivity',
      ],
      rules: [
        {
          key: 1,
          matches: '@ImageView - LinearLayout TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12908734',
        },
        {
          key: 2,
          matches:
            'HorizontalAndVerticalScrollView > FrameLayout[childCount=14] > [index=9] >5 ImageView[clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/d2f7c62c-be88-4668-b276-68bb53edfaad',
          snapshotUrls: [
            'https://i.gkd.li/i/14193836',
            'https://i.gkd.li/i/13520314',
            'https://i.gkd.li/i/12908734',
          ],
        },
        {
          key: 3,
          quickFind: true,
          matches: '[text="关闭此条广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/cf9d0574-dc89-4f03-ba01-eb9bcc97925f',
          snapshotUrls: 'https://i.gkd.li/i/14540281',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-首页右侧悬浮广告',
      activityIds: [
        'com.dragon.read.pages.main.MainFragmentActivity',
        'com.dragon.read.ad.openingscreenad.OpeningScreenADActivity',
      ],
      rules: [
        {
          matches:
            '[id="android:id/content"] > FrameLayout[childCount=1] > RelativeLayout[childCount=1] >2 ImageView[id!=null][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12716506', //relativeLayout和ImageView之间是RelativeLayoutRelativeLayout
            'https://i.gkd.li/i/13318796', //relativeLayout和ImageView之间是ViewGroup
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-优惠券弹窗',
      rules: [
        {
          key: 0,
          name: '电商惊喜券',
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          quickFind: true,
          matches:
            '@LynxFlattenUI[id=null][text=""][clickable=true] - [text="去逛商城"] -4 [text$="电商惊喜券"]',
          snapshotUrls: 'https://i.gkd.li/i/12910159',
        },
        {
          key: 1,
          name: '爆款好物一分购',
          quickFind: true,
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            '@ImageView[clickable=true] <2 LinearLayout[childCount=2] < [id="android:id/content"][childCount=1]',
          snapshotUrls: 'https://i.gkd.li/i/12878266',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-阅读页面-关注作者',
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches: '@ImageView +2 FrameLayout >3 [text="关注"]',
          snapshotUrls: 'https://i.gkd.li/i/13399505',
        },
      ],
    },
    {
      key: 5,
      name: '分段广告-阅读过程广告',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '阅读页面广告-点击反馈按钮',
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          // 有反馈原规则'[text="反馈"][clickable=true]'不触发删除[clickable=true]才能点击；有反馈原规则点击屏外节点，导致无法执行下一步，遂添加[visibleToUser=true]
          matches: [
            '[text="反馈"][clickable=true][visibleToUser=true]',
            '[text="看视频免广告"] - [text="反馈"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13520160',
            'https://i.gkd.li/i/13843155',
            'https://i.gkd.li/i/13816453', //规则2
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '阅读页面广告-点击不感兴趣',
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches: [
            '@ViewGroup[clickable=true] > [text="不感兴趣"]',
            '[text="不感兴趣"][clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13520219',
            'https://i.gkd.li/i/13674550',
            'https://i.gkd.li/i/13816454',
            'https://i.gkd.li/i/14093128', //[text="不感兴趣"][clickable=true]
          ],
        },
      ],
    },
    {
      key: 10,
      name: '通知提示',
      desc: '自动点击【取消】',
      activityIds: 'com.dragon.read.widget.ConfirmDialogBuilder',
      rules: '@[text="取消"] < * -2 * > [text="开启推送提醒"]',
      snapshotUrls: 'https://i.gkd.li/i/12716592',
    },
    {
      key: 12,
      name: '全屏广告-阅读翻页时的全屏广告',
      desc: '点击右上角【关闭】',
      quickFind: true,
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules: 'TextView[text="广告"] +2 Button[id="com.dragon.read:id/close"]',
      snapshotUrls: 'https://i.gkd.li/i/13191156',
    },
    {
      key: 13,
      name: '功能类-书城-底部继续阅读浮窗',
      desc: '点击【继续阅读】旁边的x',
      resetMatch: 'app',
      activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
      rules: '[vid="container"] > ImageView',
      snapshotUrls: 'https://i.gkd.li/i/14031943',
    },
    {
      key: 14,
      name: '功能类-阅读页面广告-点击下一页',
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules:
        '[id="com.dragon.read:id/readFlowNonRoundEntranceLayout"] [id="com.dragon.read:id/relativeRight"]',
      snapshotUrls: 'https://i.gkd.li/i/13674556',
    },
    {
      key: 15,
      name: '全屏广告-福利页面弹窗',
      activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
      rules: '@LynxFlattenUI[clickable=true] - [text="前往抽奖"]',
      snapshotUrls: 'https://i.gkd.li/i/14292475',
    },
    {
      key: 16,
      name: '评价提示',
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '@ImageView[clickable=true] +3 * > [text="五星好评"]',
      snapshotUrls: 'https://i.gkd.li/i/14395088',
    },
    {
      key: 17,
      name: '全屏广告-VIP免费领弹窗',
      desc: '点击x',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
      rules: '@UIImage[clickable=true] + [text="番茄VIP免费领"]',
      exampleUrls:
        'https://m.gkd.li/101449500/0c6e8831-9cde-47f1-8e4b-25ecfa5b2881',
      snapshotUrls: 'https://i.gkd.li/i/14539504',
    },
    {
      key: 18,
      name: '局部广告-阅读页面-章末广告卡片',
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules:
        'HorizontalAndVerticalScrollView > FrameLayout[childCount=13] >8 @FrameLayout[index=2][clickable=true] > ImageView',
      exampleUrls:
        'https://m.gkd.li/101449500/a8477c6e-433d-4903-9206-78391dad1d4c',
      snapshotUrls: 'https://i.gkd.li/i/14548657',
    },
  ],
});
