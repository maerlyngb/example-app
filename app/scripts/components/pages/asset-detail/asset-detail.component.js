(function () {
    'use strict';

    // Register `assetDetail` component, along with its associated controller and template
    angular.
    module('assetDetail').
    component('assetDetail', {
        templateUrl: 'views/asset-detail.template.html',
        controller: ['$stateParams', 'Asset',
            function AssetDetailController($stateParams, Asset) {

                // access controller variable in callback functions
                var self = this;

                this.assetId = $stateParams.assetId;

                Asset.get({
                    id: self.assetId
                }, function (data) {
                    self.assetData = data;
                });
            }
        ]
    });
})();
