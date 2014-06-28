
/* Build Task
   ---------------
   Run `gulp build` from the CLI to build your project
   Builds the project and compresses the `_site` directory into a ready-to-upload .zip file
*/

var zip			= require('gulp-zip');
var gulp 		= require('gulp');

gulp.task('build', ['browserify', 'compass', 'images', 'html']);
