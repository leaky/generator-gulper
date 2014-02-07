'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

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

    // have Yeoman greet the user
    console.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    console.log(chalk.magenta('This will install Gulper into your directory'));

    var prompts = [{
    	type: 'input',
    	name: 'proj_name',
    	message: 'What would you like to call your project?'
    },
    {
    	type: 'input',
    	name: 'proj_repo',
    	message: 'What is your Github username?'
    }];

    this.prompt(prompts, function (props) {
    	this.proj_name = props.proj_name;
    	this.proj_repo = 'http://github.com/'+props.proj_repo;
    	done();
    }.bind(this));
},

app: function () {
	//scaffold app structure
	this.mkdir('app');
	this.mkdir('app/assets');
	this.mkdir('app/assets/styles');
	this.mkdir('app/assets/scripts');
	this.mkdir('app/assets/images');

	this.directory('./gulp/app','app');

	this.copy('./gulp/gulpfile.js','gulpfile.js');
	this.copy('_package.json', 'package.json');
	this.copy('_bower.json', 'bower.json');
},

projectfiles: function () {
	this.copy('editorconfig', '.editorconfig');
	this.copy('jshintrc', '.jshintrc');
}
});

module.exports = GulperGenerator;