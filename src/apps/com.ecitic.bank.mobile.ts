import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ecitic.bank.mobile',
  name: '中信银行',
  deprecatedKeys: [1],
  groups: [
    {
      key: 2,
      name: '广告弹窗',
      activityIds: [
        'com.ecitic.bank.mobile.ui.MainActivity',
        'com.ecitic.bank.mobile.ui.webview.CordovaWebViewActivity',
      ],
      rules:
        '[id="com.ecitic.bank.mobile:id/id_cordova_view"] + [id="com.ecitic.bank.mobile:id/close_product_send"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13402746',
        'https://i.gkd.li/import/12701230',
      ],
    },
    {
      key: 3,
      name: '请求开通知权限弹窗',
      activityIds: 'com.ecitic.bank.mobile.ui.MainActivity',
      rules: '@[text="取消"] + [text="立即开启"]',
      snapshotUrls: 'https://i.gkd.li/import/13399102',
    },
  ],
});
