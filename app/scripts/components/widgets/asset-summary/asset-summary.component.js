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
                            switch (self.assetData.type) {
                            case 'Gas Turbine':
                                self.assetData.icon = 'glyphicon-asterisk';
                                break;
                            case 'Steam Turbine':
                                self.assetData.icon = 'glyphicon-certificate';
                                break;
                            case 'Centrifugal Compressor':
                                self.assetData.icon = 'glyphicon-refresh';
                                break;
                            case 'Gearbox':
                                self.assetData.icon = 'glyphicon-cog';
                                break;
                            default:
                                break;
                            }
                        });
                    }
                };

                this.labels = ['', ''];
                this.data = [300, 500];

            }
        ],
        bindings: {
            id: '<' // string
        }
    });
})();
