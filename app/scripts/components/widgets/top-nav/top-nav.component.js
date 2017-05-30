(function () {
    'use strict';

    // Register `topNav` component, along with its associated controller and template
    angular.
    module('topNav').
    component('topNav', {
        templateUrl: 'views/top-nav.template.html',
        controller: [
            function TopNavController() {
                this.appName = 'GTS Dashboard'
            }
        ]
    });
})();
