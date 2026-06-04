'use strict';

angular
    .module('directive.longPress', [])
    .directive('longPress', ['$timeout', function($timeout) {
        return {
            scope: {
                user: '='
            },
            link: function($scope, $element, $attrs) {
                var treshold = 600;
                var timeoutId = 0;

                var onMouseDownCb = function(event) {
                    timeoutId = $timeout(function() {
                        var userName = scope.user ? scope.user.username : '';
                        console.log('Long press detected on user: ' + userName);
                    }, treshold);
                };

                $element.on('mousedown', onMouseDownCb);

                var onMouseUpCb = function(event) {
                    $timeout.cancel(timeoutId);
                }

                $element.on('mouseup', onMouseUpCb);

                $scope.$on('$destroy', function() {
                    $timeout.cancel(timeoutId);
                    $element.off('mousedown');
                    $element.off('mouseup');
                });
            }
        };
    }]);