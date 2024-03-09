import * as api from '@gkd-kit/api';

export interface RawApp extends api.RawApp {
  /**
   * 某些规则组被移除不使用时, 为了避免 key 在后续被复用, 需要将已经删除的规则组的 key 填入此数组做校验使用
   */
  deprecatedKeys?: api.Integer[];

  /**
   * 此应用的规则组列表
   */
  groups: RawAppGroup[];
}

export interface RawAppGroup extends api.RawAppGroup {
  /**
   * 当全局规则有效，但需要在该应用追加同类规则时，可以使用该属性
   *
   * @default false
   *
   * 注意：使用该字段时，rules必须使用IArray<RawAppRule>格式，且需要空出全局规则使用的rule key！
   */
  global?: boolean;
}

export const defineSubsConfig = (config: api.RawSubscription) => {
  return JSON.stringify(config, undefined, 2);
};

export const defineAppConfig = (config: RawApp) => {
  return config;
};
