(function () {
    'use strict';

    // Register `myApp` component, along with its associated controller and template
    angular.
    module('myApp').
    controller('MainCtrl', ['$scope', '$rootScope',
        function ($scope, $rootScope) {

            //Global application object
            $rootScope.App = {
                name: 'GTS Dashboard',
                tabs: [{
                    title: 'Overview',
                    icon: 'fa-dashboard',
                    href: '#',
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
                        href: '#',
                        active: false
                    }, {
                        title: 'Gas Turbine 2',
                        href: '#',
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
                        href: '#',
                        active: false
                    }, {
                        title: 'Steam Turbine 2',
                        href: '#',
                        active: false
                    }, {
                        title: 'Steam Turbine 3',
                        href: '#',
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
                        href: '#',
                        active: false
                    }, {
                        title: 'Centrifugal Compressor 2',
                        href: '#',
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
                        href: '#',
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
