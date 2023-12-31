import { defineConfig } from '@ice/app';
import store from '@ice/plugin-store';
import jsxplus from '@ice/plugin-jsx-plus';
// The project config, see https://v3.ice.work/docs/guide/basic/config
const minify = process.env.NODE_ENV === 'production' ? 'swc' : false;


export default defineConfig(() => ({
  // Set your configs here.
  plugins: [store(), jsxplus()],
  minify,
  server: {
    onDemand: true,
    format: 'esm',
  },
  ssr: true,
  ssg: false,
}));
