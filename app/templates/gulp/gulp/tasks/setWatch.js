
/* setWatch Task
   ---------------
   Initialises a global boolean that determines if gulp should use watchify or browserify for compiling.
   (./browserify.js:17)
   		
*/

var gulp = require('gulp');

gulp.task('setWatch', function() {
	global.isWatching = true;
});