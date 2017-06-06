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
                    icon: 'glyphicon-dashboard',
                    href: '/',
                    index: 1,
                }, {
                    title: 'Gas Turbines',
                    icon: 'glyphicon-asterisk',
                    urlTag: 'gas-turbine',
                    index: 2,
                    subtabs: [{
                        title: 'GT-1',
                        id: 1
                    }, {
                        title: 'GT-2',
                        id: 2
                    }]
                }, {
                    title: 'Steam Turbines',
                    icon: 'glyphicon-certificate',
                    urlTag: 'steam-turbine',
                    index: 3,
                    subtabs: [{
                        title: 'ST-3',
                        id: 3
                    }, {
                        title: 'ST-4',
                        id: 4
                    }, {
                        title: 'ST-5',
                        id: 5
                    }]
                }, {
                    title: 'Centrifugal Compressor',
                    icon: 'glyphicon-refresh',
                    urlTag: 'compressor',
                    index: 4,
                    subtabs: [{
                        title: 'CC-6',
                        id: 6
                    }, {
                        title: 'CC-7',
                        id: 7
                    }]
                }, {
                    title: 'Gearbox',
                    icon: 'glyphicon-cog',
                    urlTag: 'gearbox',
                    index: 5,
                    subtabs: [{
                        title: 'G-8',
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
