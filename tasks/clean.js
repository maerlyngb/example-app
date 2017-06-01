'use strict';

const del = require('del');

module.exports = function (gulp, APP_DIR, DIST_DIR) {
    return function () {
        return del([
            DIST_DIR + '**/*'
        ]);
    };
};
