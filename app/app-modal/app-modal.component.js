'use strict';

function AppModalController($scope) {

  $scope.closeModal = function() {
    $scope.$ctrl.onCloseModal();
  };
  
}

angular.
  module('appModal', [])
  .component('appModal', {
    templateUrl: 'app-modal/app-modal.template.html',
    transclude: true,
    bindings: {
      modalId: '<',
      onCloseModal: '&'
    },
    controller: ['$scope', AppModalController]
  });
