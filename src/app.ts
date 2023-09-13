import { defineAppConfig, defineDataLoader } from 'ice';
import { isWeb } from './const';

// App config, see https://v3.ice.work/docs/guide/basic/app
export default defineAppConfig(() => ({}));

export const dataLoader = defineDataLoader(async () => {
  if (isWeb) {
    console.log('[app dataloader] run in client');
    return 1;
  } else {
    console.log('[app dataloader] run in server');
    return 2;
  }
});
