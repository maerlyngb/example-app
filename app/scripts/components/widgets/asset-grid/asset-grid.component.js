(function () {
    'use strict';

    // Register `assetGrid` component, along with its associated controller and template
    angular.
    module('assetGrid').
    component('assetGrid', {
        templateUrl: 'views/widgets/asset-grid.template.html',
        controller: [
            function AssetGridController() {

            }
        ],
        bindings: {
            headings: '=', // two-way
            data: '=' // two-way
        }
    });
})();
