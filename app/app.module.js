'use strict';

// Define the `phonecatApp` module
angular
  .module('usersApp', [
    'ngRoute',
    'services',
    'directives',
    'about',
    'userDetail',
    'userList',
    'appNavigation',
    'appModal',
    'userDeleteModal',
    'appNoData',
    'appLoadingData',
    'appMessaging'
  ]);
