import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhihu.android',
  name: '知乎',
  deprecatedKeys: [0, 1, 2, 3, 5, 8],
  groups: [
    {
      key: 6,
      name: '分段广告-信息流广告',
      desc: '点击关闭-点击内容不感兴趣',
      activityIds: [
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
        'com.zhihu.android.app.ui.activity.HostActivity',
        'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
        'com.zhihu.android.ContentActivity',
      ],
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '@ImageView[clickable=true] -n [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13849671',
        },
        {
          key: 1,
          matches:
            '@ImageView[id=null][clickable=true] -2 ViewGroup > [text$="广告"]',
          exampleUrls:
            'https://m.gkd.li/57941037/f6498773-af55-4ba9-96fa-4c0597523d55',
          snapshotUrls: [
            'https://i.gkd.li/import/12647525',
            'https://i.gkd.li/import/14178516', //activityId: com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity
          ],
        },
        {
          key: 2,
          quickFind: true,
          matches: '@ImageView[clickable=true] -3 * > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13849442',
        },
        {
          key: 3,
          matches:
            'RecyclerView[childCount=24] > FrameLayout[index=11] >3 ImageView[index=3]',
          exampleUrls:
            'https://m.gkd.li/57941037/65e9f31a-e80f-4996-9621-1b8fd92940d6',
          snapshotUrls: 'https://i.gkd.li/import/14178979',
        },
        {
          key: 90,
          preKeys: [0, 1, 2, 3],
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
      name: '通知提示-推送通知弹窗',
      desc: '点击x按钮',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.zhihu.android.app.ui.dialog.d',
          matches:
            '[id="com.zhihu.android:id/guide_title"] - [id="com.zhihu.android:id/guide_image_exit"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/25cfef06-fe50-4250-bf45-1f6210f95063',
          snapshotUrls: 'https://i.gkd.li/import/12647583',
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '全屏广告-会员页面月卡红包',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            'RelativeLayout[childCount=2] > ImageView[index=1][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/335dee89-4b55-40f1-8316-b7b4f86a8ee6',
          snapshotUrls: 'https://i.gkd.li/import/12647421',
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-会员页面广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '[id="com.zhihu.android:id/image"] < RelativeLayout + [id="com.zhihu.android:id/dismiss"]',
          exampleUrls:
            'https://m.gkd.li/57941037/9eb78a95-c2dc-4a8b-9b86-f9d0fc0ed6fd',
          snapshotUrls: 'https://i.gkd.li/import/12707676',
        },
      ],
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
      key: 14,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      activityIds: [
        'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '[vid="custom_recycler_view"] > FrameLayout[index=11] ImageView[index=4]',
          exampleUrls:
            'https://m.gkd.li/57941037/0443d5cb-aa24-4447-afd7-58c5a09af835',
          snapshotUrls: 'https://i.gkd.li/import/14178980',
        },
      ],
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
