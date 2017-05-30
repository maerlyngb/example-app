'use strict';

const eslint = require('gulp-eslint');

module.exports = function (gulp, APP_DIR) {
    return function () {
        return gulp.src([APP_DIR + 'scripts/components/**/**/*.js', '!node_modules/**'])
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    };
};
