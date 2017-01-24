var gulp = require('gulp');
var minify = require('gulp-minify');
var insert = require('gulp-insert');

gulp.task('build', function(){
	gulp.src('sources/*.js')
	.pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
    }))
	.pipe(insert.prepend('javascript: '))
	.pipe(gulp.dest('build'))
});
