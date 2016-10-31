const both = ['client', 'server'];
const client = 'client';
const server = 'server';

Package.describe({
  name: 'sample:server',
  version: '0.0.1',
  summary: 'main server package',
});


Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4.1.2');

  api.use([
    'sample:core',
    'sample:server-core',
    'reywood:publish-composite@1.4.2',
    'tmeasday:publish-counts'

  ]);
  api.addFiles([
    'server/methods/test.js',
    'server/publications/test.js',
  ]);
});
