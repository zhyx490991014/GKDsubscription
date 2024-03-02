import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.ugc.aweme.mobile',
  name: '抖音',
  groups: [
    {
      key: 1,
      name: '功能类-发现通讯录好友',
      desc: '点击【暂时不要】',
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[text="发现好友"] -2 [text="暂时不要"]',
      snapshotUrls: 'https://i.gkd.li/i/14467866',
    },
  ],
});
