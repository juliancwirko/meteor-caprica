Package.describe({
    name: 'juliancwirko:caprica',
    summary: 'Simple admin template for juliancwirko:arduino-cylon package',
    version: '0.0.1',
    git: 'https://github.com/juliancwirko/meteor-caprica'
});

Package.onUse(function(api) {

    api.use('mongo@1.0.0');
    api.use('templating@1.0.0');
    api.use('ui@1.0.0');
    api.use('juliancwirko:arduino-cylon@1.0.0');
    api.use('juliancwirko:s-alert@0.0.4');

    api.addFiles([
        'collection/caprica.js'
    ], ['server', 'client']);
    api.addFiles([
        'server/publications.js',
        'server/methods.js'
    ], 'server');
    api.addFiles([
        'client/caprica.css',
        'client/startup.js',
        'client/caprica.html',
        'client/caprica.js'
    ], 'client');

    api.export('CapricaHomeland', ['client', 'server']);

});
