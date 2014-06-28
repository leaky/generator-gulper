
/* Images Task
   ---------------
   
   Todo: Add imagemin - Errors being thrown for gulp-imagemin on 27.06.2014 (faulty gifsicle)

*/

var changed    	= require('gulp-changed');
var imagemin   	= require('gulp-imagemin');
var pngcrush 	= require('imagemin-pngcrush');
var gulp       	= require('gulp');

gulp.task('images', function() {
	var dest = global.dest_dir + '/assets/images';

	return gulp.src(global.src_dir + '/assets/images/**')
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(imagemin({
			use: [pngcrush()]
		}))
		.pipe(gulp.dest(dest));
});
