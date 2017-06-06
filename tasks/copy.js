'use strict';

module.exports = function (gulp, APP_DIR, DIST_DIR) {
    return function () {

        var paths = {
            dirs: [
                'views',
                'img'
            ],
            files: [
                'index.html',
                'scripts/app.js',
                'styles/app.css',
                'styles/app.css.map',
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
