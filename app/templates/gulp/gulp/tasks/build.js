
/* Build Task
   ---------------
   Creates an initial build of the site when the Watch task is first ran.
*/

var gulp = require('gulp');

gulp.task('build', ['browserify', 'compass', 'images', 'html']);
