import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hd.smartVillage',
  name: '恒大智慧社区',
  deprecatedKeys: [2],
  groups: [
    {
      key: 1,
      name: '关闭开启通知弹窗',
      quickFind: true,
      actionMaximum: 1,
      activityIds: [
        'com.hd.smartVillage.modules.main.MainActivity',
        'com.hd.smartVillage.modules.h5service.H5WebActivity',
      ],
      rules: 'View[id="com.hd.smartVillage:id/notificationSettingCloseBtn"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13223669', //com.hd.smartVillage.modules.main.MainActivity
        'https://i.gkd.li/import/13293000', //com.hd.smartVillage.modules.h5service.H5WebActivity
      ],
    },
  ],
});
