'use strict';

function HttpErrorInterceptor($q) {
  return {
    responseError: function(errorResponse) {
      var url = new URL(errorResponse.config.url);

      console.error('Response error method: ' + errorResponse.config.method);
      console.error('Response error base url: ' + url.origin);
      console.error('Response error endpoint: ' + url.pathname);
      console.error('Response error status: ' + errorResponse.status);

      return( $q.reject( errorResponse ) );
    }
  };
}

angular
  .module('usersApp')
  .config(['$httpProvider',
    function config($httpProvider) {
      $httpProvider.interceptors.push(HttpErrorInterceptor);
    }
  ]);
