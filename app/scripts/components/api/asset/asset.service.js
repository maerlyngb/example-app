(function () {
    'use strict';

    angular.
    module('api.asset').
    factory('Asset', ['$resource',
        function ($resource) {
            return $resource('sample-data/asset/', null, {
                get: {
                    url: 'sample-data/asset/:id.json',
                    method: 'GET',
                    params: {
                        id: '@id'
                    },
                    isArray: false
                }
            });
        }
    ]);
})();
