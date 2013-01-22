Package.describe({
    summary: "The jQuery Validate is an advanced plugin for easy and quick form validation"
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files([
        'lib/jquery-validate.js'
    ], 'client');
});
