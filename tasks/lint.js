'use strict';

const eslint = require('gulp-eslint');
const gutil = require('gulp-util');


module.exports = function (gulp, APP_DIR) {
    return function () {
        return gulp.src([APP_DIR + 'scripts/components/**/**/*.js', '!node_modules/**'])
            .pipe(eslint())
            .pipe(eslint.format())
            .on('error', gutil.log);

            // this breaks the watch task
            //.pipe(eslint.failAfterError());
    };
};
