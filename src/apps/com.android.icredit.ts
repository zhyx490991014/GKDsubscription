import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.icredit',
  name: '企查查',
  groups: [
    {
      key: 1,
      name: '全屏广告-开通VIP弹窗',
      activityIds: 'com.android.icredit.ui.MainMenuActivity',
      rules: '[text="10周年限时返场"] >3 Image',
      snapshotUrls: 'https://i.gkd.li/i/14720494',
    },
  ],
});
