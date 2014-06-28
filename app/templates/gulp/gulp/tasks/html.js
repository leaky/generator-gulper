
/* HTML Task
   ---------------
   Copy .html templates from ./app to ./_site
*/

var gulp = require('gulp');

gulp.task('html', function() {
	return gulp.src(global.src_dir + '/**/*.html')
		.pipe(gulp.dest(global.dest_dir));
});
