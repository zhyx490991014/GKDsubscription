import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mihoyo.hyperion',
  name: '米游社',
  deprecatedKeys: [1, 2],
  groups: [
    {
      key: 3,
      name: '自动打卡',
      desc: '点击[打卡],切换板块自动签到',
      activityIds: 'com.mihoyo.hyperion.main.HyperionMainActivity',
      rules:
        'TextView[id="com.mihoyo.hyperion:id/signTv"][text="打卡"][visibleToUser=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/13721772', // 未打卡
        'https://i.gkd.li/import/13721776', // 已打卡
      ],
    },
  ],
});
