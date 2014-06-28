
/* Watch Task
   ---------------
   Triggered when `gulp` (default) is ran from CLI.
   		
*/

var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
	
	gulp.watch(global.src_dir + '/assets/styles/**', ['compass']);
	gulp.watch(global.src_dir + '/assets/images/**', ['images']);
	gulp.watch(global.src_dir + '/**/*.html', ['html']);

	// browserify task handles js recompiling with watchify

});



