import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 0,
      name: '更新提示-关闭花呗升级弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
        'com.alipay.android.msp.ui.views', //views.MspContainerActivity & views.MspUniRenderActivity
        'com.alipay.android.msp.ui.views.MspContainerActivity',
      ],
      rules: [
        {
          key: 0,
          matches: 'View[childCount=3] > @Image - View[text="花呗服务升级"]',
          snapshotUrls: 'https://i.gkd.li/i/12737055', //com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main
        },
        {
          quickFind: true,
          matches: [
            '[text="根据相关法律法规要求，请尽快完成花呗升级"]',
            'FrameLayout > FrameLayout  > FrameLayout > [text="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13183946', //com.alipay.android.msp.ui.views.MspContainerActivity
            'https://i.gkd.li/i/12826077', //com.alipay.android.msp.ui.views.MspUniRenderActivity
            'https://i.gkd.li/i/12915864',
          ],
        },
        {
          quickFind: true,
          matches:
            '[text="花呗服务未升级，将影响后续使用"] <<n FrameLayout @FrameLayout[clickable=true] [text="暂不升级，继续付款"]',
          snapshotUrls: 'https://i.gkd.li/i/13631362',
        },
        {
          matches:
            '[id="com.alipay.android.app:id/flybird_userinfo"] + * >8 FrameLayout[clickable=true][index=1]',
          snapshotUrls: 'https://i.gkd.li/i/13857535',
        },
      ],
    },
    {
      key: 1,
      name: '定位提示-请求定位权限弹窗',
      quickFind: true,
      activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
      rules:
        '@[id="com.alipay.mobile.antui:id/closeButton"] - [id="com.alipay.mobile.antui:id/textAndButtonLayout"] [id="com.alipay.mobile.antui:id/tipTextView"][text^="开启定位权限"]',
      snapshotUrls: 'https://i.gkd.li/i/12792688',
    },
    {
      key: 2,
      name: '通知提示-请求通知弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '首页底部提示',
          activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
          matches:
            '@[desc="关闭"] - * >n [id="com.alipay.mobile.antui:id/tipTextView"][text^="开启通知权限"]',
          snapshotUrls: 'https://i.gkd.li/i/13194955',
        },
        {
          key: 1,
          name: '消息页弹窗提示',
          activityIds:
            'com.alipay.mobile.rome.pushservice.integration.PushOpenGuideActivity',
          matches:
            '[text="选择通知接收范围"] <2 RelativeLayout [text="暂时不用"]',
          snapshotUrls: 'https://i.gkd.li/i/13669620',
        },
      ],
    },
    {
      key: 3,
      name: '更新提示-版本更新弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: [
        'com.alipay.mobile.alipassapp.alkb.kb.ALPMainPage63',
        'com.eg.android.AlipayGphone.AlipayLogin',
        'com.alipay.mobile.about.ui.AboutAlipayActivity',
      ],
      rules: [
        {
          name: '弹窗-【稍后再说】',
          matches:
            'TextView[id="com.alipay.mobile.accountauthbiz:id/update_cancel_tv"]',
          snapshotUrls: 'https://i.gkd.li/i/13327095',
        },
        {
          name: '弹窗-【x】',
          matches:
            '[text="版本更新"||text^="Version"] - [id="com.alipay.mobile.antui:id/btn_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13490805',
            'https://i.gkd.li/i/13580594',
          ],
        },
        {
          name: '卡片-【x】',
          matches:
            '[text="立即升级最新版支付宝客户端"] < LinearLayout + [id="com.alipay.mobile.advertisement:id/announcementview_righticon"]',
          snapshotUrls: 'https://i.gkd.li/i/13490797',
        },
      ],
    },
    {
      key: 4,
      name: '设置支付宝小组件',
      desc: '点击关闭',
      quickFind: true,
      activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
      rules: [
        {
          matches:
            '@TextView[text="关闭"] < * <3 * < * + * >3 TextView[text="设置支付宝小组件"]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/i/13327349',
        },
      ],
    },
    {
      key: 10,
      name: '小程序-12306',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 0,
          matches:
            '[desc="推荐广告"] > [desc="展开更多选项"][visibleToUser=true]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/i/13763314',
        },
        {
          preKeys: 0,
          key: 1,
          quickFind: true,
          matches: '[text="对该内容不感兴趣"]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/i/13763315',
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-借呗消费信贷协议',
      desc: '点击X',
      rules: [
        {
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            '[text="同意协议并刷脸验证"] < * -4 * >2 Image[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13915022',
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-2023资产报告',
      activityIds:
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity',
      rules: '[desc="全屏广告"] >2 [desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/14112225',
    },
    {
      key: 13,
      name: '全屏广告-小程序-哈啰-专属额度到账弹窗',
      desc: '点击关闭',
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          matches:
            '[id="com.alipay.mobile.nebula:id/h5_pc_container"] View[childCount=1] > View[childCount=2] > View > Image < View + Image[text=""]',
          exampleUrls:
            'https://m.gkd.li/57941037/bfc87673-cba3-4a5b-ba77-210de8244604',
          snapshotUrls: [
            'https://i.gkd.li/i/14112224',
            'https://i.gkd.li/i/14176001', //不加text=""误触
            'https://i.gkd.li/i/14602610', // 使用 View > Image < View 防止误触
          ],
        },
      ],
    },
    {
      key: 14,
      name: '局部广告-拼多多先买后付广告',
      rules:
        '[text="拼多多 推荐你"] <n FrameLayout +2 FrameLayout > [text="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/13832300',
    },
    {
      key: 15,
      name: '分段广告-扫码成功底部卡片广告',
      activityIds:
        'com.alipay.android.phone.wallet.aptrip.ui.activity.result.ResultPageActivityV2',
      rules: [
        {
          key: 0,
          matches: '@[desc="展开更多选项"] > ImageView',
          exampleUrls:
            'https://m.gkd.li/101449500/251acfea-4c83-46b9-a016-e718dacaa75b',
          snapshotUrls: 'https://i.gkd.li/i/14546044',
        },
        {
          key: 1,
          preKeys: 0,
          quickFind: true,
          matches: '@RelativeLayout >2 [text="对该内容不感兴趣"]',
          exampleUrls:
            'https://m.gkd.li/101449500/22b353c4-fc2a-4461-b0b5-6e5cd7253893',
          snapshotUrls: 'https://i.gkd.li/i/14546047',
        },
      ],
    },
    {
      key: 16,
      name: '功能类-关闭小额免密支付开关',
      actionMaximum: 1,
      quickFind: true,
      activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
      rules:
        '@CheckBox[checked=true][checked=true] < * - [text~="开通(.*)免密支付"]',
      snapshotUrls: 'https://i.gkd.li/i/14627775',
    },
  ],
});
