
/* Compass Task w/ Autoprefixer & Minify
   --------------------------------------
   Compile .sass and .scss with Compass (http://compass-style.org)
   
   Requires compass ruby gem
		$ gem update --system
		$ gem install compass

   Edit settings in ~/compass.rb

*/

var compass      	= require('gulp-compass');
var autoprefixer    = require('gulp-autoprefixer');
var minifyCSS 		= require('gulp-minify-css');
var browserSync 	= require('browser-sync');
var notify       	= require('gulp-notify');
var gulp         	= require('gulp');
var handleErrors 	= require('../util/handleErrors');

gulp.task('compass', function() {
	return gulp.src(global.src_dir + '/assets/styles/**/*.scss')
		.pipe(compass({
			css: global.dest_dir + '/assets/styles',
			sass: global.src_dir + '/assets/styles'
		}))
		.on('error', handleErrors)
		.pipe(autoprefixer("last 1 version", "> 1%", "ie 8", "ie 7", { cascade: true }))
		.pipe(minifyCSS())
		.pipe(gulp.dest(global.dest_dir + '/assets/styles'))
		.pipe(browserSync.reload({stream:true}))
});
