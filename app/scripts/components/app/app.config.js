(function () {
    'use strict';

    angular.
    module('myApp').
    config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
        function config($locationProvider, $stateProvider, $urlRouterProvider) {
            //$locationProvider.hashPrefix('!');

            $stateProvider
                .state('home', {
                    url: '/',
                    template: '<landing-page></landing-page>'
                })
                .state('asset-demo', {
                    url: '/asset/demo/:assetType/:assetId',
                    template: '<h1>Hello from our new Page</h1>'
                })
                .state('asset-detail', {
                    url: '/asset/:assetType/:assetId',
                    template: '<asset-detail></asset-detail>'
                })

                .state('asset-analysys', {
                    url: '/analysis',
                    template: '<asset-analysis></asset-analysis>'
                });

            $urlRouterProvider.otherwise('/');
        }
    ]);
})();
