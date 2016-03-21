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
                        notifier.success('logout');
                        $scope.user.username = '';
                        $scope.user.password = '';
                        $location.path('/');
                });

        }
    }

    angular.module('app.controllers')
        .controller('LoginCtrl', ['$location','$scope','notifier', 'identity','auth',LoginCtrl]);

}());