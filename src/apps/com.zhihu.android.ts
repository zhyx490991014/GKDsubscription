import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhihu.android',
  name: '知乎',
  deprecatedKeys: [0, 1, 2, 3, 5, 8],
  groups: [
    {
      key: 6,
      name: '分段广告-问题-回答列表-卡片广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.zhihu.android.ContentActivity',
          quickFind: true,
          matches: '@ImageView[clickable=true] -n [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13849671',
        },
        {
          key: 2,
          activityIds: 'com.zhihu.android.ContentActivity',
          quickFind: true,
          matches: '@ImageView[clickable=true] -3 * > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13849442',
        },
        {
          key: 90,
          preKeys: [0],
          activityIds: 'com.zhihu.android.ContentActivity',
          quickFind: true,
          matches: '@[clickable=true] >3 [text="内容不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13849689',
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-回答底部评论顶部的任意广告推荐',
      activityIds: [
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
        'com.zhihu.android.app.ui.activity.HostActivity',
        'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
      ],
      rules: [
        {
          key: 1,
          matches:
            'TextView[text$=`的广告`] +n TextView[text=`×`][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12864109',
        },
        {
          key: 10,
          matches:
            '@ImageView[id=null][clickable=true] -(2) ViewGroup > [text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12647525',
            'https://i.gkd.li/import/14178516', //activityId: com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity
          ],
        },
        {
          key: 11,
          matches: 'TextView[text$="的广告"] +3 ImageView',
          snapshotUrls: 'https://i.gkd.li/import/14178922',
        },
        // 预留12~99
        {
          preKeys: [10],
          key: 100,
          name: '反馈弹窗-点击“不感兴趣”',
          matches:
            '[id="com.zhihu.android:id/recycler_view"] > FrameLayout >(3) [text$="不感兴趣"]',
          snapshotUrls: ['https://i.gkd.li/import/12647541'],
        },
      ],
    },
    {
      key: 9,
      name: '局部广告-推荐页-顶部广告',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        '[id="com.zhihu.android:id/tv_ad_tag"] + [id="com.zhihu.android:id/img_close_focus"]', // 1686911063850
        '[vid="ad_container"] [vid="img_close_focus"]',
      ],
      snapshotUrls: 'https://i.gkd.li/import/14156887', //规则2，规则1快照缺失
    },
    {
      enable: false,
      key: 10,
      name: '推送通知弹窗',
      desc: '推送通知弹窗-点击x按钮',
      activityIds: 'com.zhihu.android.app.ui.dialog.d',
      rules: [
        'TextView[id="com.zhihu.android:id/guide_title"] - ImageView[id="com.zhihu.android:id/guide_image_exit"][clickable=true]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12647583'],
    },
    {
      enable: false,
      key: 11,
      name: '会员页面-月卡红包',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        'ImageView[id="com.zhihu.android:id/floating_img"] + ImageView[id="com.zhihu.android:id/floating_close_btn"][clickable=true]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12647421'],
    },
    {
      key: 12,
      name: '会员页面-广告弹窗',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        '[id="com.zhihu.android:id/image"] < RelativeLayout + [id="com.zhihu.android:id/dismiss"]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12707676'],
    },
    {
      key: 13,
      name: '全屏广告-发想法赢奖励弹窗',
      desc: '点击右上角x',
      activityIds: 'com.zhihu.android.topic.TopicActivity',
      rules: '[vid="scene_container"] >n ViewGroup + ImageView',
      snapshotUrls: 'https://i.gkd.li/import/14020339',
    },
    {
      enable: false,
      key: 101, // 不属于广告，序号往后排
      name: '功能类-问题回答-自动展开',
      activityIds:
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
      rules: [
        'ImageView[id="com.zhihu.android:id/iv_expand"] - TextView[id="com.zhihu.android:id/tv_expand"][text="展开"][visibleToUser=true]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/12647688',
        'https://i.gkd.li/import/12707687', // 使用 [visibleToUser=true] 进行限定，防止在控件不可见时提前触发规则
      ],
    },
  ],
});
