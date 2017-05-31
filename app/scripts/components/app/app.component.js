(function () {
    'use strict';

    // Register `myApp` component, along with its associated controller and template
    angular.
    module('myApp').
    component('myApp', {
        controller: ['$rootScope',
            function MyAppController($rootScope) {

                $rootScope.name = 'GTS Dashboard';

            }
        ]
    });
})();
