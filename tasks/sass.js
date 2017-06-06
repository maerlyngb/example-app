'use strict';

// Compile Sass
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');
var cleanCSS = require('gulp-clean-css');

module.exports = function (gulp, APP_DIR) {
    return function () {
        var autoprefixerOptions = {
            browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
        };

        return gulp.src(APP_DIR + 'styles/sass/app.scss')
            .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyle: 'expanded'
            })).on('error', sass.logError)
            .pipe(autoprefixer(autoprefixerOptions))
            .pipe(cleanCSS({
                compatibility: 'ie8'
            }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(APP_DIR + 'styles'))
            .pipe(sassdoc())
            // Release the pressure back and trigger flowing mode (drain)
            // See: http://sassdoc.com/gulp/#drain-event
            .resume();
    };
};
