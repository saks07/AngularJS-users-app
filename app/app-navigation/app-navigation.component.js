'use strict';

function NavigationController($scope) {
    $scope.routes = [
        { id: 'userList', routeHref: 'users', routeText: 'Users' },
        { id: 'about', routeHref: 'about', routeText: 'About' }
    ];
}

angular
    .module('appNavigation')
    .component('appNavigation', {
        templateUrl: 'app-navigation/app-navigation.template.html',
        controller: ['$scope', NavigationController]
    });
