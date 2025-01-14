import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yitong.mbank.psbc',
  name: '邮储银行',
  deprecatedKeys: [1],
  groups: [
    {
      key: 2,
      name: '首页广告弹窗',
      activityIds:
        'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
      rules:
        '[id="com.yitong.mbank.psbc:id/iv_theme"] + [id="com.yitong.mbank.psbc:id/iv_theme_close_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/12755516',
    },
    {
      key: 3,
      name: '首页-浮窗广告',
      activityIds:
        'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
      rules: '[id="com.yitong.mbank.psbc:id/img_close_float_window"]',
      snapshotUrls: 'https://i.gkd.li/import/13797314',
    },
  ],
});
