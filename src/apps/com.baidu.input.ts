import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.input',
  name: '百度输入法',
  groups: [
    {
      key: 1,
      name: '全屏广告-创作祝福弹窗',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[id="android:id/content"] >2 [vid="button_close"]',
      snapshotUrls: 'https://i.gkd.li/import/14179064',
    },
  ],
});
