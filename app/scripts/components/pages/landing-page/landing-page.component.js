(function () {
    'use strict';

    // Register `landingPage` component, along with its associated controller and template
    angular.
    module('landingPage').
    component('landingPage', {
        templateUrl: 'views/pages/landing-page.template.html',
        controller: [
            function landingPageController() {
                this.assets = [1, 2, 3, 4, 5, 6, 7, 8];
            }
        ]
    });
})();
