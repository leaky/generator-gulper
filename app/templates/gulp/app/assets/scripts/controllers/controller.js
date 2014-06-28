'use strict';

exports.StartController = function ($scope) {

	var dependencies = [
		{
			'name': 'Angular',
			'href': 'https://github.com/angular/bower-angular'
		},
		{
			'name': 'Angular Routes',
			'href': 'https://github.com/angular/bower-angular-route'
		},
		{
			'name': 'Autoprefixer',
			'href': 'https://www.npmjs.org/package/gulp-autoprefixer'
		},
		{
			'name': 'Browserify',
			'href': 'https://www.npmjs.org/package/gulp-browserify'
		},
		{
			'name': 'Browserify Shim',
			'href': 'https://www.npmjs.org/package/gulp-browserify'
		},
		{
			'name': 'BrowserSync',
			'href': 'https://www.npmjs.org/package/browser-sync'
		},
		{
			'name': 'CoffeeScript',
			'href': 'https://www.npmjs.org/package/coffeeify'
		},
		{
			'name': 'Compass',
			'href': 'https://www.npmjs.org/package/gulp-compass'
		},
		{
			'name': 'Handlebars',
			'href': 'https://www.npmjs.org/package/hbsfy'
		},
		{
			'name': 'Image optimization',
			'href': 'https://www.npmjs.org/package/gulp-imagemin'
		},
		{
			'name': 'LiveReload',
			'href': 'https://www.npmjs.org/package/browser-sync'
		},
		{
			'name': 'Minify CSS',
			'href': 'https://www.npmjs.org/package/gulp-minify-css'
		},
		{
			'name': 'Notify',
			'href': 'https://www.npmjs.org/package/gulp-notify'
		},
		{
			'name': 'SASS',
			'href': 'https://www.npmjs.org/package/gulp-compass'
		},
		{
			'name': 'Watchify',
			'href': 'https://www.npmjs.org/package/gulp-watchify'
		}
	];

	$scope.name = 'Gulper 2.0';
	$scope.dependencies = dependencies;

}