'use strict';

function UserDeleteModalController($scope) {

  $scope.acceptDelete = function() {
    $scope.$ctrl.onAcceptDelete();
  }

  $scope.rejectDelete = function(event) {
    event.stopImmediatePropagation();
    $scope.$ctrl.onRejectDelete();
  }

}

angular.
  module('userDeleteModal', [])
  .component('userDeleteModal', {
    templateUrl: 'user-list/components/user-delete-modal/user-delete-modal.template.html',
    bindings: {
      userData: '<',
      modalId: '=',
      onAcceptDelete: '&',
      onRejectDelete: '&',
    },
    controller: ['$scope', UserDeleteModalController]
  });
