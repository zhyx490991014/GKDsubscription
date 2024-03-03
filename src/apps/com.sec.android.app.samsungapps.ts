import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sec.android.app.samsungapps',
  name: '应用商店',
  groups: [
    {
      key: 1,
      name: '功能类-年满18岁',
      desc: '点击【是】',
      activityIds: 'com.sec.android.app.samsungapps.SearchResultActivity',
      quickFind: true,
      rules: '[text="您是否年满 18 岁？"] +4 [vid="positive"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/14473690',
    },
  ],
});
