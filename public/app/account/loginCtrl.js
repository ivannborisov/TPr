(function() {

    function LoginCtrl ($location, $scope, notifier, identity, auth) {
        $scope.identity = identity;
        $scope.login = function (user){
            auth.login(user)
                .then(function(success){
                    if(success){
                        notifier.success('successful login');
                    }
                    else {
                        notifier.error("Username/Password not valid");
                    }
                });
        } ;

        $scope.logout = function() {
            auth.logout()
                .then(function(){
                    if ($scope.user) {
                        $scope.user.username = '';
                        $scope.user.password = '';
                    }
                    notifier.success('logout');

                    $location.path('/');
                });

        }
    }

    angular.module('app.controllers')
        .controller('LoginCtrl', ['$location','$scope','notifier', 'identity','auth',LoginCtrl]);

}());