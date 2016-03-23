(function(){

    angular.module('app')
        .factory('auth', function ($http,$q, identity, UsersResource) {
           return {
               signup: function (user){
                   var user = new UsersResource(user);
                   var deffered = $q.defer();

                   user.$save().then(function () {
                       identity.currentUser = user;
                       deffered.resolve();
                   },function (res){
                       deffered.reject(res);
                   });


                   return deffered.promise;
               },
               update: function(user){

                   var deffered = $q.defer();
                   var updatedUser = new UsersResource(user);
                   updatedUser._id = identity.currentUser._id;
                   updatedUser.$update().then(function(){
                       identity.currentUser.firstName = updatedUser.firstName;
                       identity.currentUser.lastName = updatedUser.lastName;
                       deffered.resolve();
                   },function(response){
                       deffered.reject(response);
                   });

                   return deffered.promise;
               },
               login:function (user){
                    var deffered = $q.defer();

                   $http.post('/login', user)
                       .then(function(response){
                           if(response.data.success){

                               var user = new UsersResource();
                               angular.extend(user, response.data.user);
                               identity.currentUser = user;
                               deffered.resolve(true);
                           }
                           else {
                               deffered.resolve(false);
                           }
                       });
                   return deffered.promise;
               },
               logout: function(){
                   var deffered = $q.defer();

                   $http.post('/logout')
                       .then(function(response){
                               identity.currentUser = undefined;
                               deffered.resolve();
                       });
                   return deffered.promise;
               },
               isAuthenticated: function (){
                   if(identity.isAuthenticated()){
                       return true;
                   }
                   else {
                       return $q.reject('not authorized');
                   }
               },
               isAuthorizedForRole: function(role) {
                   if (identity.isAuthorizedForRole(role)) {
                       return true;
                   }
                   else {
                       return $q.reject('not authorized');
                   }
               }
           }

        });
}());