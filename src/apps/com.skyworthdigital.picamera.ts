import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.skyworthdigital.picamera',
  name: '创维智慧云',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      global: true,
      rules: [
        {
          key: 0,
          matches: '[vid="splash_container"] >4 View[clickable=true]',
          exampleUrls:
            'https://m.gkd.li/101449500/576447d9-56ce-476d-9d2f-4de479c82f96',
          snapshotUrls: 'https://i.gkd.li/i/14537292',
        },
      ],
    },
  ],
});
