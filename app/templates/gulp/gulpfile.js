var gulp 				= require('gulp'),
	gutil 				= require('gulp-util');

var http 				= require('http'),
	sass 				= require('gulp-sass'),
	autoprefixer 		= require('gulp-autoprefixer'),
	minifycss 			= require('gulp-minify-css'),
	jshint 				= require('gulp-jshint'),
	rename 				= require('gulp-rename'),
	uglify				= require('gulp-uglify'),
	clean 				= require('gulp-clean'),
	concat 				= require('gulp-concat'),
	imagemin 			= require('gulp-imagemin'),
	cache 				= require('gulp-cache'),
	open				= require('gulp-open'),
	livereload 			= require('gulp-livereload'),
	embedlr				= require('gulp-embedlr'),
	ecstatic			= require('ecstatic'),
	lr 					= require('tiny-lr'),
	server 				= lr();

var config = {
	http_port: 			"1337",
	livereload_port: 	"35729",
	startpage:			"dist/index.html",
	src_html: 			"app/**/*.html",
	src_sass: 			"app/assets/styles/**/*.scss",
	src_js: 			"app/assets/scripts/**/*.js",
	src_img: 			"app/assets/images/**/*.*",
	dest_css: 			"dist/assets/styles",
	dest_js: 			"dist/assets/scripts",
	dest_img: 			"dist/assets/images",
	js_concat_target: 	"main.js",
};

// sass task
gulp.task('styles', function() {
	gulp.src(config.src_sass)
		.pipe(sass({style:"expanded" }))
		.pipe(autoprefixer("last 2 version", "safari 5", "ie 7", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4"))
		.pipe(gulp.dest(config.dest_css))
		.pipe(rename({ suffix: ".min" }))
		.pipe(minifycss())
		.pipe(gulp.dest(config.dest_css))
		.pipe(livereload(server))
});

// concat & minify js
gulp.task('scripts', function() {
	gulp.src(config.src_js)
		.pipe(jshint(/* ".jshintrc" */))
		.pipe(jshint.reporter('default'))
		.pipe(concat(config.js_concat_target))
		.pipe(gulp.dest(config.dest_js))
		.pipe(rename({ suffix: ".min" }))
		.pipe(uglify())
		.pipe(gulp.dest(config.dest_js))
		.pipe(livereload(server))
});

// minify images
gulp.task('images', function() {
	gulp.src(config.src_img)
		.pipe(imagemin())
		.pipe(gulp.dest(config.dest_img))
});

// watch html & embed lr
gulp.task('html', function() {
	gulp.src(config.src_html)
		.pipe(embedlr())
		.pipe(gulp.dest('dist/'))
		.pipe(livereload(server))
});

// clean '.dist/'
gulp.task('clean', function() {
	gulp.src(['./dist/**/*.*'], { read: true })
		.pipe(clean())
});

gulp.task('open', function() {
	gulp.src(config.startpage)
		.pipe(open(config.startpage, { url: 'http://localhost:'+config.http_port }));
});

// default task -- run 'gulp' from cli
gulp.task('default', ['html', 'scripts', 'styles', 'images', 'open', 'clean'], function() {
	server.listen(config.livereload_port);
	http.createServer(ecstatic({ root: 'dist/' } )).listen(config.http_port);
		// gutil.log(gutil.colors.yellow('HTTP Server running on port:'), gutil.colors.red(config.http_port));
	gulp.watch(config.src_sass, ['styles'])._watcher.on('all', livereload);
	gulp.watch(config.src_js, ['scripts'])._watcher.on('all', livereload);
	gulp.watch(config.src_html, ['html'])._watcher.on('all', livereload);
});