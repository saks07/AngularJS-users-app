'use strict';

angular
    .module('service.messaging')
    .factory('MessagingService', ['$rootScope', function($rootScope) {
        var state = {
            type: null,
            message: null
        };

        var setMessage = function(type, message) {
            state.type = type;
            state.message = message;
            $rootScope.$broadcast('message:updated', state);
        }

        var getMessage = function() {
            return state;
        }

        return { setMessage, getMessage, state }
    }]);