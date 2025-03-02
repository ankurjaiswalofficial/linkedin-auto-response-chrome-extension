export default defineContentScript({
  matches: ['*://*.linkedin.com/*'],
  main() {
    console.log('Hello content.');
  },
});
