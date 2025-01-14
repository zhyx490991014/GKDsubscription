import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  deprecatedKeys: [-1, 1, 11],
  groups: [
    {
      key: 0,
      name: '局部广告-阅读界面-底部广告',
      activityIds: [
        'com.dragon.read.ad.banner.ui',
        'com.dragon.read.reader.ReaderActivity',
        'com.dragon.read.reader.ui.ReaderActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '@[clickable=true] TextView[text="关闭此条广告"]',
        },
        {
          key: 1,
          matches: '@ImageView - LinearLayout TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12908734',
        },
        {
          key: 2,
          matches:
            'FrameLayout > FrameLayout > ViewGroup[childCount=4] > @FrameLayout[clickable=true][visibleToUser=true] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/12716444',
            'https://i.gkd.li/import/13062909', // 误触
          ],
        },
        {
          key: 3,
          quickFind: true,
          matches:
            '[id="com.dragon.read:id/layout_banner_ad_bg"] > [id="com.dragon.read:id/close_button"]',
          snapshotUrls: 'https://i.gkd.li/import/13520314',
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
            'https://i.gkd.li/import/12716506', //relativeLayout和ImageView之间是RelativeLayoutRelativeLayout
            'https://i.gkd.li/import/13318796', //relativeLayout和ImageView之间是ViewGroup
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
          snapshotUrls: 'https://i.gkd.li/import/12910159',
        },
        {
          key: 1,
          name: '爆款好物一分购',
          quickFind: true,
          activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
          matches:
            '@ImageView[clickable=true] <2 LinearLayout[childCount=2] < [id="android:id/content"][childCount=1]',
          snapshotUrls: 'https://i.gkd.li/import/12878266',
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
          snapshotUrls: 'https://i.gkd.li/import/13399505',
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
            'https://i.gkd.li/import/13520160',
            'https://i.gkd.li/import/13843155',
            'https://i.gkd.li/import/13816453', //规则2
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
            'https://i.gkd.li/import/13520219',
            'https://i.gkd.li/import/13674550',
            'https://i.gkd.li/import/13816454',
            'https://i.gkd.li/import/14093128', //[text="不感兴趣"][clickable=true]
          ],
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '通知提示',
      desc: '自动点击【取消】',
      activityIds: 'com.dragon.read.widget.ConfirmDialogBuilder',
      rules: '@[text="取消"] < * -2 * > [text="开启推送提醒"]',
      snapshotUrls: 'https://i.gkd.li/import/12716592',
    },
    {
      key: 12,
      name: '全屏广告-阅读翻页时的全屏广告',
      desc: '点击右上角【关闭】',
      quickFind: true,
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules: 'TextView[text="广告"] +2 Button[id="com.dragon.read:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/13191156',
    },
    {
      key: 13,
      name: '功能类-书城-底部继续阅读浮窗',
      desc: '点击【继续阅读】旁边的x',
      resetMatch: 'app',
      activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
      rules: '[vid="container"] > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/14031943',
    },
    {
      key: 14,
      name: '功能类-阅读页面广告-点击下一页',
      activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
      rules:
        '[id="com.dragon.read:id/readFlowNonRoundEntranceLayout"] [id="com.dragon.read:id/relativeRight"]',
      snapshotUrls: 'https://i.gkd.li/import/13674556',
    },
  ],
});
