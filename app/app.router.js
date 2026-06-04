'use strict';

angular.
  module('usersApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/users', {
          template: '<user-list></user-list>'
        }).
        when('/about', {
          template: '<about></about>'
        }).
        otherwise('/users');
    }
  ]);
