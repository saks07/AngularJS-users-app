'use strict';

function UserDetailsAddressFilter() {
    /**
     * interface Input { street: string; suite: string; city: string; zipcode: string; geo: Geo }
     * interface Geo { lat: string; long: string }
     */
    return function(input) {
        if (!input) {
            return '';
        }

        return input.street + ', ' + input.city + ' ' + input.zipcode;
    }
}

angular
    .module('userDetail')
    .filter('userAddress', UserDetailsAddressFilter)
    .component('userDetail', {
        templateUrl: 'user-list/components/user-detail/user-detail.template.html',
        bindings: {
            user: '<'
        }
    });
