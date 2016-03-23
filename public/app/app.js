(function() {
    'use strict';


    angular.module('app.controllers' , []);
    angular.module('app', ['app.controllers', 'ngResource', 'ngRoute']);




    angular.module('app')
        .config(function ($routeProvider, $locationProvider){
            $locationProvider.html5Mode(true);

            var routeUserChecks = {
                adminRole : {
                    authenticate:function(auth){
                        return auth.isAuthorizedForRole('admin');
                    }
                },
                authenticated: {
                    authenticate: function (auth) {
                        return auth.isAuthenticated();
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
                    controller:'CarsCtrl'
                })
                .when('/cars/:id',{
                    templateUrl :'partials/cars/details',
                    controller:'CarDetailsCtrl'
                })
                .when('/admin/users', {
                    templateUrl: 'partials/admin/users-list',
                    controller: 'UserListCtrl',
                    resolve: routeUserChecks.adminRole
                })
                .when('/profile', {
                    templateUrl :'partials/account/profile',
                    controller:'ProfileCtrl',
                    resolve: routeUserChecks.authenticated
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