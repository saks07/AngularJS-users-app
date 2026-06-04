'use strict';

function AppMessagingController($scope, $timeout, MessagingService) {
  $scope.messagingService = MessagingService;

  $scope.state = {
    showMessage: false,
    timeoutId: 0
  }

  $scope.messageState = $scope.messagingService.getMessage();

  // Getters
  $scope.getMessageType = function() {
    return $scope.messageState.type;
  }

  $scope.getMessageText = function() {
    return $scope.messageState.message;
  }

  $scope.getShowMessage = function() {
    $scope.setShowMessage($scope.messageState.type !== null && $scope.messageState.message !== null);  
    return $scope.state.showMessage;
  }

  // Setters
  $scope.setShowMessage = function(value) {
    $scope.state.showMessage = value;
  }

  $scope.setTimeout = function(value) {
    $scope.state.timeoutId = $timeout(function() {
        $scope.setShowMessage(false);
        $scope.messagingService.resetMessage();
    }, 2000);
  }

  // Methods
  $scope.closeMessage = function(event) {
    event.stopImmediatePropagation();

    $scope.setShowMessage(false);

    $timeout.cancel($scope.timeoutId);
    $scope.messagingService.resetMessage();
  }

  // Watchers
  $scope.$watch('state.showMessage', function(newVal, oldVal) {
    if (newVal) {
      $scope.setTimeout();
      return;
    }

    $scope.setShowMessage(false);
    $timeout.cancel($scope.state.timeoutId);
  });
}

angular
  .module('appMessaging')
  .component('appMessaging', {
    templateUrl: 'shared/components/app-messaging/app-messaging.template.html',
    controller: ['$scope', '$timeout', 'MessagingService', AppMessagingController]
  });
