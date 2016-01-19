
'use strict';

// Basic template description.
exports.description = 'Create a angular overview app.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '';

// Template-specific notes to be displayed after question prompts.
exports.after = '';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'node'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('version', '0.1.0'),
    init.prompt('username', 'jason-wanjohi'),
    init.prompt('description', 'simple application'),
    init.prompt('author_name', 'Jason Wanjohi'),
    init.prompt('license'),
    init.prompt('main', 'app.js'),
    init.prompt('node_version', '>= 0.12.0'),
  ], function(err, props) {

    props.scripts = {
      'postinstall': './node_modules/bower/bin/bower install'
    };
    props.devDependencies = {
    'grunt': '^0.4.5',
    'grunt-cli': '^0.1.13',
    'bower': '^1.7.2',
    'grunt-contrib-connect': '^0.11.2'
    };
    props.keywords = ['jason'];


    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    var bower = {};
    bower.name = props.name;
    bower.main = 'Gruntfile.js';
    bower.dependencies = {
      'bootstrap': '~3.3.6',
      'angular': '~1.4.8'
    };

    // Generate bower.json file.
    init.writePackageJSON('bower.json',   bower);

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};

