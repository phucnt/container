const client = 'client';
const server = 'server';
const both = [client, server];

Package.describe({
  name: 'sample:collection-demo',
  version: '0.0.1',
  summary: 'demo collection mongo',
});

Package.onUse(function(api) {
  api.use('sample:collection-core');
  api.addFiles([
    'lib/demo.js'
  ]);
  api.export('Demo')
});
