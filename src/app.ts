import { defineAppConfig, defineDataLoader } from 'ice';
import { isWeb } from './const';

// App config, see https://v3.ice.work/docs/guide/basic/app
export default defineAppConfig(() => ({}));

console.log('[order] run in app.ts');


export const dataLoader = defineDataLoader(async () => {
  if (isWeb) {
    console.log('[order] [app dataloader] run in client');
    return 1;
  } else {
    console.log('[order] [app dataloader] run in server');
    return 2;
  }
});
