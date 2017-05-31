'use strict';

module.exports = function (gulp, APP_DIR) {
    return function () {
        gulp.watch(APP_DIR + 'styles/sass/*.scss', ['sass']);
        gulp.watch(APP_DIR + 'scripts/components/**/**/*.js', ['js', 'lint']);
    };
};
