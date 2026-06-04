'use strict';

// Define the `phonecatApp` module
angular
  .module('usersApp', [
    'ngRoute',
    'httpClient',
    'services',
    'directives',
    'about',
    'userDetail',
    'userList',
    'appNavigation',
    'appModal',
    'userDeleteModal',
    'noData',
    'loadingData',
    'appMessaging'
  ]);
