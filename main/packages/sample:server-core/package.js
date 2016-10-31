/* global Package, Npm*/

/* eslint-disable*/
const both = ['server', 'client'];
const server = 'server';
const client = 'client';
/* eslint-enable*/

Package.describe({
  name: 'sample:server-core',
  version: '0.0.1',
  summary: 'Poppi attribute based access control package',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4.1.2');

  api.use([
    'sample:core',
    'sample:collection-core',
    'sample:collection-user',
    'sample:collection-demo',
    'meteorhacks:npm',
    'reywood:publish-composite@1.4.2',
    'aldeed:collection2@2.9.0',
    'tmeasday:publish-counts',
  ]);
  api.imply([
    'sample:collection-user',
    'sample:collection-demo',
    'reywood:publish-composite@1.4.2',
  ]);

});
