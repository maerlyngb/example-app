'use strict';

//https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-uglify-sourcemap.md


var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

module.exports = function (gulp, APP_DIR) {
    return function () {
        // set up the browserify instance on a task basis
        var b = browserify({
            entries: APP_DIR + 'scripts/modules.js',
            debug: false
        });

        return b.bundle()
            .pipe(source('app.js'))
            .pipe(buffer())
            // .pipe(sourcemaps.init({
            //     loadMaps: true
            // }))
            // Add transformation tasks to the pipeline here.
            //.pipe(uglify())
            .on('error', gutil.log)
            //.pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./app/scripts/'));
    };
};
