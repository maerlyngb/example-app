(function () {
    'use strict';

    // Register `sideNav` component, along with its associated controller and template
    angular.
    module('sideNav').
    component('sideNav', {
        templateUrl: 'views/widgets/side-nav.template.html',
        controller: ['$scope', '$location',
            function SideNavController($scope, $location) {

                //enable controller variable to be used in callbacks
                var self = this;

                this.currentPath = $location.path();

                $scope.$on('$locationChangeSuccess', function () {
                    self.currentPath = $location.path();
                });

                this.isChildActive = function (tabHref) {
                    return (tabHref.substr(3, tabHref.length) === this.currentPath) ? 'active' : '';
                };

                this.isParentActive = function (urlTag) {
                    var isParentActive = false;

                    if (!urlTag && (this.currentPath === '/')) {
                        // we are on the home page
                        isParentActive = true;
                    } else {
                        var pathArray = this.currentPath.split('/');
                        isParentActive = (pathArray[2] === urlTag);
                    }

                    return isParentActive;
                };

            }
        ],
        bindings: {
            title: '@', // string
            tabs: '=' // two-way
        }
    });
})();
