(function() {

    function SignUpCtrl ($location,$scope, auth, notifier) {
        $scope.signup = function(user){
            auth.signup(user).then(function(success){
                notifier.success('Registration successful!');
                $location.path('/');
            });
        }
    }

    angular.module('app.controllers')
        .controller('SignUpCtrl', ['$location','$scope', 'auth', 'notifier',SignUpCtrl]);

}());