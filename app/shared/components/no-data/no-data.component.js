'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('noData').
  component('noData', {
    templateUrl: 'shared/components/no-data/no-data.template.html',
    bindings: {
      noName: '='
    }
  });
