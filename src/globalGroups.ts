import apps from './rawApps';
import { RawGlobalGroup, RawAppGroup } from '@gkd-kit/api';
import { RawApp } from './types';
import { orderList } from './utils';
import { commonAppBlackList, systemAppWhiteList } from './globalDefaultApps';

// 如果应用规则已有全局规则中的某一类的规则, 则在对应全局规则禁用此应用
function filterAppsByGroup(apps: RawApp[], groupNamePrefix: string): string[] {
  return apps
    .filter(
      (a) =>
        a.groups.filter((g: RawAppGroup) => g.name.startsWith(groupNamePrefix))
          .length > 0,
    )
    .map((a) => a.id);
}

// 设置单独禁用
const openDiabledAppIds = new Set([
  ...commonAppBlackList,
  ...filterAppsByGroup(apps, '开屏广告'),
]);
const updateDiabledAppIds = new Set([
  ...commonAppBlackList,
  'info.muge.appshare', // AppShare
  ...filterAppsByGroup(apps, '更新提示'),
]);
const youngDiabledAppIds = new Set([
  ...commonAppBlackList,
  'xxx.pornhub.fuck', // JavDB
  ...filterAppsByGroup(apps, '青少年模式'),
]);

// 设置系统软件单独启用
const openEnabledAppIds = new Set([
  ...systemAppWhiteList,
  'com.bbk.theme', // i 主题
  'com.sec.android.app.samsungapps', // 三星应用商店
  'com.bbk.appstore', // vivo应用商店
  'com.miui.systemAdSolution', // 小米智能服务
  'com.huawei.appmarket', // 华为应用市场
  'com.xiaomi.market', // 小米应用商店
  'com.miui.player', //小米音乐
]);
const updateEnabledAppIds = new Set([...systemAppWhiteList]);
const youngEnabledAppIds = new Set([...systemAppWhiteList]);

const globalGroups: RawGlobalGroup[] = [
  {
    key: 0,
    name: '开屏广告',
    order: orderList[0],
    actionMaximum: 2,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
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
    ],
    apps: [...openDiabledAppIds]
      .map((id) => ({ id, enable: false }))
      .concat([...openEnabledAppIds].map((id) => ({ id, enable: true }))),
  },
  {
    key: 1,
    name: '更新提示',
    order: orderList[2],
    actionMaximum: 1,
    matchTime: 10000,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        matches: [
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][height>0&&width>0][(text*="内测" || text*="测试版" || text*="新版" || text*="更新" || text*="升级" || text*="体验" || text*="內測" || text*="測試版" || text*="升級" || text*="體驗" || text*="Update" || text*="Upgrade" || text*="Experience")&&text!*="自动"&&text!*="自動"&&(text!*="成功"&&text!*="失败"&&text!*="失敗"&&(text!*="已" || text*="已知")&&text!*="检查更新")]',
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][height>0&&width>0][(((text*="立即" || text*="马上" || text*="并" || text*="现在" || text*="立刻" || text*="抢先" || text*="去" || text*="在线")&&(text*="更新" || text*="下载" || text*="安装" || text*="升级" || text*="查看" || text*="体验")) || text="更新" || text="下载" || text="安装" || text="升级" || text="确定" || text="好，升级")&&text.length<6]',
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][height>0&&width>0][text^="不再" || text$="再说" || text$="拒绝" || text$="再想想" || text^="忽略" || text^="暂不" || text^="放弃" || text^="取消" || text$="不要" || text$="再說" || text$="暫不" || text$="拒絕" || text$="Later" || text^="Ignore" || text^="Not now" || text^="Cancel" || vid^="close" || vid^="Close" || vid^="closeIv" || vid*="_close" || vid*="_Close" || vid$="close" || vid$="Close" || vid$="cancel" || vid$="Cancel" || vid$="cancle" || vid$="Cancle" || vid$="ignore" || vid$="Ignore"]',
        ],
      },
    ],
    apps: [...updateDiabledAppIds]
      .map((id) => ({ id, enable: false }))
      .concat([...updateEnabledAppIds].map((id) => ({ id, enable: true }))),
  },
  {
    key: 2,
    name: '青少年模式',
    order: orderList[1],
    actionMaximum: 1,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    rules: [
      {
        key: 0,
        matches: [
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][height>0&&width>0][((text*="青少年" || text*="未成年") && text*="模式" || text*="儿童模式") && text.length<15 || ((desc*="青少年" || desc*="未成年") && desc*="模式") && desc.length<15]',
          '[name!$=".CheckBox"][childCount=0][visibleToUser=true][height>0&&width>0][text*="知道了" || text*="关闭" || text="我已知晓" || desc*="知道了" || desc*="关闭"]',
        ],
      },
    ],
    apps: [...youngDiabledAppIds]
      .map((id) => ({ id, enable: false }))
      .concat([...youngEnabledAppIds].map((id) => ({ id, enable: true }))),
  },
];

export default globalGroups;
