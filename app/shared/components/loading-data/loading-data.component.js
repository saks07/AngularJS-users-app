'use strict';

angular.
  module('loadingData').
  component('loadingData', {
    templateUrl: 'shared/components/loading-data/loading-data.template.html',
    bindings: {
      loadingName: '='
    }
  });
