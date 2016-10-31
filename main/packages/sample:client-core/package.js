const client = 'client';
const server = 'server';
const both = [client, server];

Package.describe({
  name: 'sample:client-core',
  version: '0.0.1',
  summary: 'client core package'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4.1.2');
  api.use([
    'sample:core'
  ]. both);
  api.use([
    'kadira:flow-router@2.0.2',
    'templating',
    'react-meteor-data',
    'sample:collection-demo',
  ], client);
  api.imply([
    'templating',
    'meteorhacks:subs-manager@1.6.4',
    'reactive-var',
    'react-meteor-data',
    'tmeasday:publish-counts@0.7.3',
    'sample:collection-demo',
  ], client)
  api.addFiles([
    'client/FR.js'
  ], client);

  api.export('FR');
});
