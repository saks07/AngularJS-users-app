'use strict';

angular
    .module('directive.longPress', [])
    .directive('longPress', ['$timeout', function($timeout) {
        return {
            scope: {
                user: '='
            },
            link: function($scope, $element, $attrs) {
                $scope.treshold = 600;
                $scope.timeoutId = 0;

                $scope.onMouseDownCb = function(event) {
                    $scope.timeoutId = $timeout(function() {
                        var userName = $scope.user ? $scope.user.username : '';
                        console.log('Long press detected on user: ' + userName);
                    }, $scope.treshold);
                };

                $element.on('mousedown', $scope.onMouseDownCb);

                $scope.onMouseUpCb = function(event) {
                    $timeout.cancel($scope.timeoutId);
                }

                $element.on('mouseup', $scope.onMouseUpCb);

                $scope.$on('$destroy', function() {
                    $timeout.cancel($scope.timeoutId);
                    $element.off('mousedown');
                    $element.off('mouseup');
                });
            }
        };
    }]);