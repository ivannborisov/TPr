(function() {

    function ProfileCtrl ($scope,$location, identity, auth) {
        $scope.user = {
            firstName: identity.currentUser.firstName,
            lastName: identity.currentUser.lastName,
        }

        $scope.editPrifile = function (user) {

            auth.update(user).then(function(){
                $location.path('/');
            });
        }
    }

    angular.module('app.controllers')
        .controller('ProfileCtrl', ['$scope','$location','identity','auth',ProfileCtrl]);

}());