Package.describe({
  name: 'commoncode:autobahn',
  summary: 'Open-source real-time framework for Web, Mobile & Internet of Things',
  version: '1.0.0',
  git: 'https://github.com/commoncode/meteor-autobahn.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('autobahn.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('commoncode:autobahn');
  api.addFiles('autobahn-tests.js');
});
