'use strict';
var util 	= require('util');
var path 	= require('path');
var spawn 	= require('child_process').spawn;
var yeoman 	= require('yeoman-generator');
var chalk 	= require('chalk');

var GulperGenerator = yeoman.generators.Base.extend({
	init: function () {
		this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));
		this.on('end', function () {
			if (!this.options['skip-install']) {
				this.npmInstall();
			}
		});
	},

	askFor: function () {
		var done = this.async();
		var currVersion = this.pkg.version;

		console.log(this.yeoman);
		console.log(chalk.yellow('Gulper already comes with SASS and a Gulpfile.js'));

		var prompts = [{
			type: 'checkbox',
			name: 'features',
			message: 'What more would you like?',
			choices: [{
				name: 'Modernizr',
				value: 'includeModernizr',
				checked: false
			},{
				name: 'jQuery (Google CDN)',
				value: 'includejQuery',
				checked: false
			},{
				name: 'Bourbon Sass Mixins',
				value: 'includeBourbon',
				checked: false
			}]
		},{
			type: 'input',
			name: 'projectName',
			message: 'What would you like to call your project?'
		}];

		this.prompt(prompts, function (answers) {

			var features = answers.features;

			function hasFeature(feat) {
				return features.indexOf(feat) !== -1;
			}

			this.includeModernizr = hasFeature('includeModernizr');
			this.includejQuery = hasFeature('includejQuery');
			this.includeBourbon = hasFeature('includeBourbon');
			this.projectName = answers.projectName;
			this.projectVersion = currVersion;

			done();
		}.bind(this));
	},

	app: function () {

	this.mkdir('app');
	this.mkdir('app/assets');
	this.mkdir('app/assets/styles');
	this.mkdir('app/assets/scripts');
	this.mkdir('app/assets/images');

	if (includeBourbon) {		
		var terminal = require('child_process').spawn('bash');
		terminal.stdout.on('data', function (data) {
		    console.log('stdout: ' + data);
		});
		terminal.on('exit', function (code) {
		    console.log('child process exited with code ' + code);
		});
		setTimeout(function() {
		    console.log('Installing Bourbon');
		    terminal.stdin.write('bourbon install --path ./app/assets/styles');
		    terminal.stdin.write('uptime\n');
		    terminal.stdin.end();
		}, 1000);
	};

	this.directory('./gulp/app','app');

	this.copy('./gulp/gulpfile.js','gulpfile.js');
	this.copy('_package.json', 'package.json');
	// this.copy('_bower.json', 'bower.json');
},

projectfiles: function () {
	this.copy('editorconfig', '.editorconfig');
	this.copy('jshintrc', '.jshintrc');
}
});

module.exports = GulperGenerator;