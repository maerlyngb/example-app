(function () {
    'use strict';

    angular.
    module('myApp').
    config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
        function config($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.hashPrefix('!');

            $stateProvider
                .state('home', {
                    url: '/',
                    template: '<landing-page></landing-page>'
                })
                .state('asset-detail', {
                    url: '/asset/:assetId',
                    template: '<asset-detail></asset-detail>'
                });

            $urlRouterProvider.otherwise(function ($injector) {
                var $state = $injector.get('$state');
                $state.go('home');
            });
        }
    ]);
})();
