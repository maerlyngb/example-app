(function () {
    'use strict';

    // Register `myApp` component, along with its associated controller and template
    angular.
    module('myApp').
    controller('MainCtrl', ['$scope', '$rootScope',
        function ($scope, $rootScope) {

            var urlPrefix = '/#!'

            //Global application object
            $rootScope.App = {
                name: 'GTS Dashboard',
                tabs: [{
                    title: 'Overview',
                    icon: 'fa-dashboard',
                    href: urlPrefix + '/',
                    index: 1,
                    active: true
                }, {
                    title: 'Gas Turbines',
                    icon: 'fa-circle-o',
                    href: '#',
                    index: 2,
                    active: false,
                    subtabs: [{
                        title: 'Gas Turbine 1',
                        href: urlPrefix + '/asset/gas-turbine/1',
                        active: false
                    }, {
                        title: 'Gas Turbine 2',
                        href: urlPrefix + '/asset/gas-turbine/2',
                        active: false
                    }]
                }, {
                    title: 'Steam Turbines',
                    icon: 'fa-dot-circle-o',
                    href: '#',
                    index: 3,
                    active: false,
                    subtabs: [{
                        title: 'Steam Turbine 1',
                        href: urlPrefix + '/asset/steam-turbine/1',
                        active: false
                    }, {
                        title: 'Steam Turbine 2',
                        href: urlPrefix + '/asset/steam-turbine/2',
                        active: false
                    }, {
                        title: 'Steam Turbine 3',
                        href: urlPrefix + '/asset/steam-turbine/3',
                        active: false
                    }]
                }, {
                    title: 'Centrifugal Compressor',
                    icon: 'fa-circle',
                    href: '#',
                    index: 4,
                    active: false,
                    subtabs: [{
                        title: 'Centrifugal Compressor 1',
                        href: urlPrefix + '/asset/compressor/1',
                        active: false
                    }, {
                        title: 'Centrifugal Compressor 2',
                        href: urlPrefix + '/asset/compressor/2',
                        active: false
                    }]
                }, {
                    title: 'Gearbox',
                    icon: 'fa-cog',
                    href: '#',
                    index: 5,
                    active: false,
                    subtabs: [{
                        title: 'Gearbox 1',
                        href: urlPrefix + '/asset/gearbox/1',
                        active: false
                    }]
                }]
            };

            $scope.getYear = function(){
                var date = new Date();
                return date.getFullYear();
            };
        }
    ]);
})();
