(function () {
    'use strict';

    function UserListCtrl ($scope, UsersResource) {
        $scope.users = UsersResource.query();
    }

    angular.module('app.controllers')
        .controller('UserListCtrl', ['$scope', 'UsersResource', UserListCtrl]);

}());