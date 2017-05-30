'use strict';

var APP_DIR = 'app/';
var gulp = require('gulp');

// loads external gulp tasks by filename
function getTask(task) {
    return require('./tasks/' + task)(gulp, APP_DIR);
}

gulp.task('lint', getTask('lint'));

// compile js
gulp.task('js', getTask('js'));

// compile sass
gulp.task('sass', getTask('sass'));

// run app
gulp.task('serve', getTask('serve'));

// watch for file changes and do any required processing
gulp.task('watch', getTask('watch'));

// compile css, server app, watch for changes
gulp.task('default', ['lint', 'js', 'sass', 'serve', 'watch']);