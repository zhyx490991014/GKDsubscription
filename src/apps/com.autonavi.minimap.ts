import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          key: 1,
          name: '更新弹窗-1',
          matches:
            '@[id="com.autonavi.minimap:id/iv_close"] + * > [text^="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/13379094',
        },
        {
          key: 2,
          name: '更新弹窗-2',
          actionCdKey: 1,
          matches: '@[text="取消"] + * + [text="去下载"]',
          snapshotUrls: 'https://i.gkd.li/i/13379426',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-首页-广告卡片',
      desc: '关闭首页的所有可关闭的广告卡片',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        'View[text!="" && text!=null] <(1,2) ViewGroup[childCount=2 || childCount=3] <<n ViewGroup >(1,2) @ViewGroup[index!=0][childCount=1][visibleToUser=true][clickable=true] > ImageView',
      exampleUrls: [
        'https://m.gkd.li/101449500/9a0ef511-4acc-4a7e-9c25-e9384662b3d1',
        'https://m.gkd.li/101449500/57d378eb-334c-4552-81f7-f7393a92412b',
        'https://m.gkd.li/101449500/4c78d23e-10b2-40cb-a156-83237d237a6c',
      ],
      snapshotUrls: [
        'https://i.gkd.li/i/14715295',
        'https://i.gkd.li/i/14730914',
        'https://i.gkd.li/i/14730915',
      ],
    },
    {
      key: 4,
      name: '功能类-截屏分享',
      desc: '关闭截屏时app弹出的分享弹窗',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        '[text="分享截图至"] < ViewGroup < ViewGroup + @ViewGroup[clickable=true] > ImageView',
      snapshotUrls: 'https://i.gkd.li/i/13473388',
    },
    {
      key: 10,
      name: '功能类-首页-地图页面上方消息提醒',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        'RelativeLayout[desc="弹窗"] > [id="com.autonavi.minimap:id/msgbox_popup_clear"]',
      snapshotUrls: 'https://i.gkd.li/i/12642830',
    },
    {
      key: 11,
      name: '功能类-首页-签到卡片',
      desc: '点击【x】',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        'ImageView[visibleToUser=true][width<90][height<90] < @ViewGroup -(2) ViewGroup > ViewGroup > View[text*="签到"||text*="成长值"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12642842',
        'https://i.gkd.li/i/12642845',
        'https://i.gkd.li/i/12818770', // 限定 ImageView[visibleToUser=true]，防止控件不可见时触发规则
        'https://i.gkd.li/i/13764540', // 限定 ImageView[width<90][height<90]，避免在此误触
      ],
    },
    {
      key: 12,
      name: '全屏广告-加油页面-优惠券弹窗',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        '@ImageView < [desc="关闭"][clickable=true] - ViewGroup > ViewGroup > ViewGroup > View[text="立即领取"]',
      snapshotUrls: ['https://i.gkd.li/i/12642857'],
    },
    {
      key: 13,
      name: '全屏广告-打车页-优惠券弹窗',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        '[vid="mapBottomInteractiveView"] - FrameLayout >n ViewGroup[childCount=3] > ViewGroup > ImageView[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13806882',
    },
  ],
});
