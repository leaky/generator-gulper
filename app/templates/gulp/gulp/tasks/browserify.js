
/* Browserify task
   ---------------
   Bundle JS with browserify
   Uses watchify instead of browserify for faster bundling via caching if the watch task is running
*/

var browserify   	= require('browserify');
var watchify     	= require('watchify');
var gulp         	= require('gulp');
var source       	= require('vinyl-source-stream');
var bundleLogger 	= require('../util/bundleLogger');
var handleErrors 	= require('../util/handleErrors');

gulp.task('browserify', function() {

	var bundleMethod = global.isWatching ? watchify : browserify;

	var bundler = bundleMethod({

		entries: [global.src_dir + '/assets/scripts/app.js'],
		extensions: ['.js', '.coffee', '.hbs']

	});

	var bundle = function() {
		// start bundling
		bundleLogger.start();

		return bundler
			// enable source maps
			.bundle({debug: true})
			
			// report compile errors
			.on('error', handleErrors)
			
			// uses vinyl-source-stream to make the stream gulp compatible. 
			// specify desired output filename here.
			
			.pipe(source('app.js'))
			
			// output destination
			.pipe(gulp.dest(global.dest_dir + '/assets/scripts'))
			
			// log when bundling has completed
			.on('end', bundleLogger.end);
	};

	if (global.isWatching) {
		
		// rebundle with watchify on changes.
		bundler.on('update', bundle);

	}

	return bundle();

});
