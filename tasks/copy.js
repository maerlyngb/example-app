'use strict';

module.exports = function (gulp, APP_DIR, DIST_DIR) {
    return function () {

        var paths = {
            dirs: [
                'views',
                'img',
                'bower_components/bootstrap/dist/fonts',
            ],
            files: [
                'index.html',
                'favicon.ico',
                'scripts/app.js',
                'styles/app.css',
                'bower_components/bootstrap/dist/js/bootstrap.min.js',
                'bower_components/bootstrap/dist/css/bootstrap.min.css'
            ],
        };

        paths.dirs.forEach(function (dir) {
            gulp.src(APP_DIR + dir + '/**/*')
                .pipe(gulp.dest(DIST_DIR + dir));
        }, this);

        paths.files.forEach(function (file) {
            gulp.src(APP_DIR + file)
                .pipe(gulp.dest(DIST_DIR + file.substring(0, file.lastIndexOf("/"))));
        }, this);
    };
};
