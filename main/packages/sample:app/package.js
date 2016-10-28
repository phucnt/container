const both = ['client', 'server'];
const client = 'client';
const server = 'server';

Package.describe({
  name: 'sample:app',
  version: '0.0.1',
  summary: 'sample package',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4.1.2');

  api.imply([
    'sample:core',
    'sample:client-routes',
    'sample:server',
    'sample:client-core',
  ]);
});
