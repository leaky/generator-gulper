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
		console.log(chalk.cyan('You\'re awesome for choosing Gulper!'));

		var prompts = [{
			type: 'input',
			name: 'projectName',
			message: 'What would you like to call your project?'
		}];

		this.prompt(prompts, function (answers) {

			var features = answers.features;

			function hasFeature(feat) {
				return features.indexOf(feat) !== -1;
			}

			this.projectName = answers.projectName;
			this.projectVersion = currVersion;

			done();
		}.bind(this));
	},

	app: function () {

		this.directory('./gulp/gulp', 'gulp');
		this.directory('./gulp/app', 'app');

		this.copy('./gulp/gulpfile.js', 'gulpfile.js');
		this.copy('./gulp/compass.rb', 'compass.rb');
		this.copy('./gulp/package.json', 'package.json');

	},

projectfiles: function () {
	this.copy('editorconfig', '.editorconfig');
	this.copy('jshintrc', '.jshintrc');
}
});

module.exports = GulperGenerator;