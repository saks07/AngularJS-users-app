'use strict';

function AppMessagingController($scope, $timeout) {
  $scope.timeoutId = 0;
  $scope.state = {
    showMessage: false,
    messageType: null,
    messageText: null
  }

  // Setters
  $scope.setShowMessage = function(value) {
    $scope.state.showMessage = value;
  }

  $scope.setMessageType = function(value) {
    $scope.state.messageType = value;
  }

  $scope.setMessageText = function(value) {
    $scope.state.messageText = value;
  }

  $scope.closeMessage = function(event) {
    event.stopImmediatePropagation();

    $scope.setShowMessage(false);
    $scope.setMessageType(null);
    $scope.setMessageText(null);

    $timeout.cancel($scope.timeoutId);
  }

  $scope.$on('message:updated', function(event, data) {
    if (data.type && data.message && !$scope.state.showMessage) {
      $scope.setMessageType(data.type);
      $scope.setMessageText(data.message);
      $scope.setShowMessage(true);

      $scope.timeoutId = $timeout(function() {
        $scope.setShowMessage(false);
      }, 1500);

      return;
    }

    $scope.setMessageType(null);
    $scope.setMessageText(null);
    $scope.setShowMessage(false);

    $timeout.cancel($scope.timeoutId);
  });

}

angular
  .module('appMessaging')
  .component('appMessaging', {
    templateUrl: 'shared/components/app-messaging/app-messaging.template.html',
    controller: ['$scope', '$timeout', AppMessagingController]
  });
