'use strict';

angular
    .module('service.user')
    .factory('UserService', ['HttpClientService', function($httpClient) {
        var getUsers$ = function() {
            return $httpClient.get$('/users');
        };

        var deleteUser$ = function(userId) {
            return $httpClient.delete$('/users/' + userId);
        };

        return { getUsers$, deleteUser$ };
    }
  ]);