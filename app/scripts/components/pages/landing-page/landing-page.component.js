(function () {
    'use strict';

    // Register `landingPage` component, along with its associated controller and template
    angular.
    module('landingPage').
    component('landingPage', {
        templateUrl: 'views/pages/landing-page.template.html',
        controller: [
            function landingPageController() {
            }
        ]
    });
})();
