(function() {
    'use strict';


    angular.module('app.controllers' , []);
    angular.module('app', ['app.controllers', 'ngResource', 'ngRoute']);




    angular.module('app')
        .config(function ($routeProvider, $locationProvider){
            $locationProvider.html5Mode(true);

            var routeRoleChecks = {
                admin : {
                    auth:function(auth){
                        return auth.isAuthorizedForRole('admin');
                    }
                }
            }


            $routeProvider
                .when('/', {
                    templateUrl :'partials/main/home',
                    controller:'MainController'
                })
                .when('/cars',{
                    templateUrl :'partials/cars/index',
                    controller:'MainController'
                })
                .when('/admin/users', {
                    templateUrl: 'partials/admin/users-list',
                    controller: 'UserListCtrl',
                    resolve: routeRoleChecks.admin
                })
                .when('/signup', {
                    templateUrl :'partials/account/signup',
                    controller:'SignUpCtrl'
                });
        });

        angular.module('app').run(function($rootScope, $location) {
            $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
                if (rejection === 'not authorized') {
                    $location.path('/');
                }
            })
        });


}());