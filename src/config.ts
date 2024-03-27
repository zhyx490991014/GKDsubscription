import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import { RawSubscription } from '@gkd-kit/api';

const subsConfig: RawSubscription = {
  id: 825,
  version: 0,
  name: 'Adpro的GKD订阅',
  author: 'Adpro - AdproTeam',
  supportUri: 'https://github.com/Adpro-Team/GKD_subscription/issues',
  checkUpdateUrl: './Adpro_gkd.version.json5', // https://github.com/orgs/gkd-kit/discussions/558
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
