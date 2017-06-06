'use strict';

var APP_DIR = 'app/';
var DIST_DIR = 'dist/'
var gulp = require('gulp');

// loads external gulp tasks by filename
function getTask(task) {
    return require('./tasks/' + task)(gulp, APP_DIR, DIST_DIR);
}

gulp.task('lint', getTask('lint'));

// compile js
gulp.task('js', getTask('js'));

// compile and minify js
gulp.task('js.min', getTask('js.min'));

// compile sass
gulp.task('sass', getTask('sass'));

// run app for development
gulp.task('serve', ['lint', 'js', 'sass'], getTask('serve'));

// watch for file changes and do any required processing
gulp.task('watch', getTask('watch'));

// delete everything in the dist folder
gulp.task('clean', getTask('clean'));

// copy files to dist folder
gulp.task('copy', ['clean', 'js.min', 'sass'], getTask('copy'));

// build distributable
gulp.task('dist', ['clean', 'js.min', 'sass', 'copy']);

// compile css, server app, watch for changes
gulp.task('default', ['lint', 'js', 'sass', 'serve', 'watch']);
