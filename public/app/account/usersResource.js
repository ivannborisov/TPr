(function() {


    angular.module('app')
        .factory('UsersResource' , function($resource){
            var UsersResource = $resource('/api/users/:id', {_id: '@id'});

            UsersResource.prototype.isAdmin = function (){
                console.log('asdasd');
                console.log(this.roles);
                return this.roles && this.roles.indexOf('admin') > -1;
            }

            return UsersResource;
        });
}());