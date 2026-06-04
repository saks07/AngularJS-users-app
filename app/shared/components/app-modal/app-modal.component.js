'use strict';

function AppModalController($scope) {

  $scope.closeModal = function() {
    $scope.$ctrl.onCloseModal();
  };
  
}

angular.
  module('appModal', [])
  .component('appModal', {
    templateUrl: 'shared/components/app-modal/app-modal.template.html',
    transclude: {
      modalBody: 'modalBody'
    },
    bindings: {
      modalId: '<',
      onCloseModal: '&'
    },
    controller: ['$scope', AppModalController]
  });
