Package.describe({
    summary: "Expose mongodb aggregation framework (mapReduce, aggregate and distinct), to SERVER side only.",
    version: '1.0.2',
    name: 'laboratory:mongodb-mapreduce-aggregation',
    git: 'https://github.com/monbro/meteor-mongodb-mapreduce-aggregation'
});

function configurePackage(api) {

  if(api.versionsFrom) {
    api.versionsFrom('METEOR@1.0.1');
  }

  // Core Dependencies
  api.use(
    [
      'meteor'
    ]
  );

  api.use('coffeescript', 'server');
  api.use('underscore', 'server');

  api.addFiles('server.coffee', 'server');
}

Package.onUse(function(api) {
  configurePackage(api);
});

Package.onTest(function(api) {
  configurePackage(api);
  api.use('tinytest');
});
