(function(){

    angular.module('app')
        .factory('auth', function ($http,$q, identity, UsersResource) {
           return {
               login:function (user){
                    var deffered = $q.defer();

                   $http.post('/login', user)
                       .then(function(response){
                           if(response.data.success){

                               var user = new UsersResource();
                               angular.extend(user, response.data.user);
                               console.log(user);
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