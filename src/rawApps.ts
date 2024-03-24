import _ from 'lodash';
import path from 'node:path';
import url from 'node:url';
import picocolors from 'picocolors';
import { pinyin } from 'pinyin-pro';
import { walk } from './file';
import { RawApp } from './types';
import { RawAppGroup } from '@gkd-kit/api';
import categories from './categories';
import { orderList } from './utils';

const rawApps: RawApp[] = [];
for await (const tsFp of walk(process.cwd() + '/src/apps')) {
  if (!tsFp.endsWith('.ts')) {
    throw new Error('invalid typescript app config file: ' + tsFp);
  }
  const mod: { default: RawApp } = await import(url.pathToFileURL(tsFp).href);
  const appConfig = mod.default;
  if (path.basename(tsFp, '.ts') != appConfig.id) {
    throw new Error(
      `${picocolors.blue(
        tsFp,
      )} file basename is not equal to its app id ${picocolors.blue(
        appConfig.id,
      )} `,
    );
  }
  delete appConfig.deprecatedKeys;
  appConfig.groups?.forEach((g: RawAppGroup) => {
    for (let i of categories) {
      if (g.name.startsWith(i.name)) {
        if (!g.name.startsWith(categories[0].name)) g.enable = false;
        else g.order = orderList[categories[0].key];

        if (g.name.startsWith(categories[1].name))
          g.order = orderList[categories[1].key];

        if (g.name.startsWith(categories[2].name))
          g.order = orderList[categories[2].key];

        return;
      }
    }
    g.name = `${categories[12].name}-${g.name}`;
  });
  rawApps.push(appConfig);
}

const apps = _.sortBy(rawApps, (a) => {
  const showName = a.name || a.id;
  const pyName = pinyin(showName, {
    separator: '',
    toneType: 'none',
  });
  if (pyName === showName) return showName;
  return '\uFFFF' + pyName; // 让带拼音的全排在后面
});
export default apps;
