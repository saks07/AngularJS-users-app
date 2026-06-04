'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('appNoData').
  component('appNoData', {
    templateUrl: 'shared/components/app-no-data/app-no-data.template.html',
    bindings: {
      noName: '='
    }
  });
