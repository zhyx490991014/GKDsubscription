import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bw30.zsch',
  name: '四川航空',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '升级弹窗',
      quickFind: true,

      activityIds: ['com.bw.zsch.MainActivityTab'],
      rules: '[id="com.bw30.zsch:id/tv_cancel"]',
      snapshotUrls: ['https://i.gkd.li/i/13068699'],
    },
  ],
});
