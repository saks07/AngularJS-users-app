'use strict';

angular
    .module('service.messaging')
    .factory('MessagingService', function() {
        var self = this;

        self.state = {
            type: null,
            message: null
        };

        var setMessage = function(type, message) {
            self.state.type = type;
            self.state.message = message;
        }

        var getMessage = function() {
            return self.state;
        }

        var resetMessage = function() {
            self.state.type = null;
            self.state.message = null;
        }

        return { setMessage, getMessage, resetMessage }
    });