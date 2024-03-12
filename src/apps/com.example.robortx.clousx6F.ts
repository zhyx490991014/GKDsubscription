import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.example.robortx.clousx6F',
  name: 'Clousx6',
  groups: [
    {
      key: 1,
      name: '功能类-公告弹窗',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules:
        '[vid="tv_next"][text="下一条"] <<n LinearLayout - [vid="iv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/14571096',
    },
  ],
});