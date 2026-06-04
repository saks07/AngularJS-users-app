'use strict';

function UserListController($scope, UserService, MessagingService) {
  var userService = UserService;
  var messagingService = MessagingService;
  
  // State
  $scope.state = {
    users: [],
    searchQuery: '',
    selectedUserData: null,
    deleteUserData: null,
    fetchingUsers: false
  };

  // Lifecycle hooks
  this.$onInit = function() {
    $scope.setFetchingUsers(true);

    userService.getUsers$()
      .then(function(response) {
        if (!response) {
          throw new Error('Could not fetch users!');
        }

        $scope.setUserData(response.data);
        messagingService.setMessage('success', 'Users fetched successfully!');
      })
      .catch(function(error) {
        $scope.setUserData([]);
        messagingService.setMessage('error', error.message || 'Could not fetch users!');
      })
      .finally(function() {
        $scope.setFetchingUsers(false);
      });
  };

  // Setters
  $scope.setFetchingUsers = function(value) {
    $scope.state.fetchingUsers = value;
  }

  $scope.setUserData = function(value) {
    $scope.state.users = value;
  }

  $scope.setSelectedUserData = function(value) {
    $scope.state.selectedUserData = value;
  }

  $scope.setDeleteUserData = function(value) {
    $scope.state.deleteUserData = value;
  }

  // Methods
  $scope.showUserDetail = function(user) {
    $scope.setSelectedUserData(user);
  };

  $scope.deleteUserPrompt = function(user) {
    $scope.setDeleteUserData(user);
  }

  $scope.deleteUser = function() {
    if (!$scope.state.deleteUserData) {
      return;
    }

    var userId = $scope.state.deleteUserData.id;
    userService.deleteUser$(userId)
      .then(function(response) {
        if (!response) {
          throw new Error('Could not delete user!');
        } 

        messagingService.setMessage('success', 'User deleted successfully!');
        $scope.removeUserFromList(userId);
        $scope.setDeleteUserData(null);
      })
      .catch(function(error) {
        $scope.setDeleteUserData(null);
        messagingService.setMessage('error', error.message || 'Could not delete user!');
      })
  }

  $scope.removeUserFromList = function(userId) {
    var cloneUsers = [ ...$scope.state.users ];
    var deleteUser = cloneUsers.filter(function(user) {
      return user.id !== userId;
    });

    $scope.setUserData(deleteUser);
  }

  $scope.resetSelectedUser = function() {
    $scope.setSelectedUserData(null);
  }

  $scope.resetDeleteUser = function() {
    $scope.setDeleteUserData(null);
  }
}

angular
  .module('userList')
  .component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: ['$scope', 'UserService', 'MessagingService', UserListController]
  });
