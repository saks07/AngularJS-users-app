'use strict';

angular
    .module('service.httpClient')
    .factory('HttpClientService', ['$http', function($http) {
        var self = this;

        self.baseUrl = 'https://jsonplaceholder.typicode.com';

        var get$ = function(endpoint) {
            var url = self.baseUrl + endpoint;
            return $http.get(url);
        }

        var delete$ = function(endpoint) {
            var url = self.baseUrl + endpoint;
            return $http.delete(url);
        }

        return { get$, delete$ };
    }]);