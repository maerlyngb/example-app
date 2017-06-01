(function () {
    'use strict';

    // Register `assetDetail` component, along with its associated controller and template
    angular.
    module('assetDetail').
    component('assetDetail', {
        templateUrl: 'views/asset-detail.template.html',
        controller: ['$stateParams',
            function AssetDetailController($stateParams) {
                this.assetType = $stateParams.assetType;
                this.assetId = $stateParams.assetId;
            }
        ]
    });
})();
