(function () {
    'use strict';

    // Register `assetDetail` component, along with its associated controller and template
    angular.
    module('assetDetail').
    component('assetDetail', {
        templateUrl: 'views/pages/asset-detail.template.html',
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

                this.lchart = {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    series: ['Series A', 'Series B'],
                    data: [
                        [65, 59, 80, 81, 56, 55, 40],
                        [28, 48, 40, 19, 86, 27, 90]
                    ],
                    datasetOverride: [{
                        yAxisID: 'y-axis-1'
                    }, {
                        yAxisID: 'y-axis-2'
                    }],
                    options: {
                        scales: {
                            yAxes: [{
                                id: 'y-axis-1',
                                type: 'linear',
                                display: true,
                                position: 'left'
                            },
                            {
                                id: 'y-axis-2',
                                type: 'linear',
                                display: true,
                                position: 'right'
                            }]
                        }
                    }
                    // ,
                    // onClick: function (points, evt) {
                    //     console.log(points, evt);
                    // }
                };

                this.bchart = {
                    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
                    series: ['Series A', 'Series B'],
                    data: [
                        [65, 59, 80, 81, 56, 55, 40],
                        [28, 48, 40, 19, 86, 27, 90]
                    ],
                };

                this.assetPerf = {
                    headings: [
                        'tag',
                        'value',
                        'status',
                        'delta'
                    ],
                    data: [{
                        tag: 'tag-name',
                        value: '4',
                        status: 'healthy',
                        delta: ''
                    }, {
                        tag: 'tag-name',
                        value: '4',
                        status: 'healthy',
                        delta: ''
                    }, {
                        tag: 'tag-name',
                        value: '4',
                        status: 'healthy',
                        delta: ''
                    }, {
                        tag: 'tag-name',
                        value: '4',
                        status: 'healthy',
                        delta: ''
                    }]
                };

                // after the charts have rendered, match all panel heights
                // this could be done better...
                setTimeout(function () {
                    $('.panel-eq-height').matchHeight();
                }, 1);

                $(window).on('resize', function () {
                    $.fn.matchHeight._update();
                });
            }
        ]
    });
})();
