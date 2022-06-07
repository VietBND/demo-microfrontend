module.exports = {
  name: 'flight-web',
  exposes: {
    './Module': 'apps/flight-web/src/app/remote-entry/entry.module.ts',
  },
};
