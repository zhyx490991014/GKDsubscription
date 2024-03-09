import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import { RawSubscription } from '@gkd-kit/api';
import { iArrayToArray } from './file';

apps.forEach((a) => {
  a.groups.forEach((g) => {
    if (g.name.startsWith('开屏广告') == true && g.global === true) {
      g.rules = iArrayToArray(g.rules).concat(globalGroups[0].rules);
      delete g.global;
    }
    if (g.name.startsWith('更新提示') == true && g.global === true) {
      g.rules = iArrayToArray(g.rules).concat(globalGroups[1].rules);
      delete g.global;
    }
    if (g.name.startsWith('青少年模式') == true && g.global === true) {
      g.rules = iArrayToArray(g.rules).concat(globalGroups[2].rules);
      delete g.global;
    }
  });
});

const subsConfig: RawSubscription = {
  id: 825,
  version: 0,
  name: 'Adpro的GKD订阅',
  author: 'Adpro - AdproTeam',
  supportUri: 'https://github.com/Adpro-Team/GKD_subscription/issues',
  updateUrl:
    'https://raw.gitmirror.com/Adpro-Team/GKD_subscription/main/dist/Adpro_gkd.json5',
  checkUpdateUrl:
    'https://raw.gitmirror.com/Adpro-Team/GKD_subscription/main/dist/Adpro_gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
