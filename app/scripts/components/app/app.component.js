(function () {
    'use strict';

    // Register `myApp` component, along with its associated controller and template
    angular.
    module('myApp').
    controller('MainCtrl', ['$scope', '$rootScope',
        function ($scope, $rootScope) {

            var urlPrefix = '/#!/asset';

            //Global application object
            $rootScope.App = {
                name: 'GTS Dashboard',
                tabs: [{
                    title: 'Overview',
                    icon: 'fa-dashboard',
                    href: '/',
                    index: 1,
                }, {
                    title: 'Gas Turbines',
                    icon: 'fa-circle-o',
                    urlTag: 'gas-turbine',
                    index: 2,
                    subtabs: [{
                        title: 'Gas Turbine',
                        id: 1
                    }, {
                        title: 'Gas Turbine',
                        id: 2
                    }]
                }, {
                    title: 'Steam Turbines',
                    icon: 'fa-dot-circle-o',
                    urlTag: 'steam-turbine',
                    index: 3,
                    subtabs: [{
                        title: 'Steam Turbine',
                        id: 3
                    }, {
                        title: 'Steam Turbine',
                        id: 4
                    }, {
                        title: 'Steam Turbine',
                        id: 5
                    }]
                }, {
                    title: 'Centrifugal Compressor',
                    icon: 'fa-circle',
                    urlTag: 'compressor',
                    index: 4,
                    subtabs: [{
                        title: 'Centrifugal Compressor',
                        id: 6
                    }, {
                        title: 'Centrifugal Compressor',
                        id: 7
                    }]
                }, {
                    title: 'Gearbox',
                    icon: 'fa-cog',
                    urlTag: 'gearbox',
                    index: 5,
                    subtabs: [{
                        title: 'Gearbox',
                        id: 8
                    }]
                }]
            };

            // build up href attributes on child tabs
            for (var i = $rootScope.App.tabs.length - 1; i >= 0; i--) {
                var parent = $rootScope.App.tabs[i];

                if (!parent.subtabs) {
                    continue;
                }

                for (var j = parent.subtabs.length - 1; j >= 0; j--) {
                    var child = parent.subtabs[j];
                    child.href = urlPrefix + '/' + parent.urlTag + '/' + child.id;
                }
            }

            $scope.getYear = function () {
                var date = new Date();
                return date.getFullYear();
            };
        }
    ]);
})();
