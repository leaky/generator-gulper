
/* BrowserSync Task
   ---------------
   Synchronises URLs, interactions and code changes across multiple devices.
   http://browsersync.io/
*/

var browserSync 	= require('browser-sync');
var gulp        	= require('gulp');

gulp.task('browserSync', ['build'], function() {
	browserSync.init([global.dest_dir + '/**'], {
		server: {
			baseDir: global.dest_dir
		}
	});
});
