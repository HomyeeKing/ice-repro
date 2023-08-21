import { defineAppConfig, defineDataLoader } from 'ice';

// App config, see https://v3.ice.work/docs/guide/basic/app
export default defineAppConfig(() => ({
}));

console.log('exec app.ts');

export const dataLoader = defineDataLoader(async () => {
 console.log('exec dataloader in app.ts');
 
});