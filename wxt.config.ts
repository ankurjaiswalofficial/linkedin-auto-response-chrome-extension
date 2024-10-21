import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    permissions: ['activeTab'],
    content_scripts: [
      {
        matches: ['https://www.linkedin.com/*'],
        js: ['entrypoints/popup/main.tsx'],
      },
    ],
  },
  modules: ['@wxt-dev/module-react'],
});
