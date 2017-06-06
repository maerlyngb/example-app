(function () {
    'use strict';

    // Register `assetSummary` component, along with its associated controller and template
    angular.
    module('assetSummary').
    component('assetSummary', {
        templateUrl: 'views/widgets/asset-summary.template.html',
        controller: ['Asset',
            function AssetSummaryController(Asset) {

                // access controller variable in callback functions
                var self = this;

                // wait for our id to be populated before making the API call
                this.$onChanges = function (changes) {
                    if (changes.id.isFirstChange()) {
                        Asset.get({
                            id: self.id
                        }, function (data) {
                            self.assetData = data;
                        });
                    }
                };

            }
        ],
        bindings: {
            id: '<' // string
        }
    });
})();
