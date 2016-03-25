(function(){

    angular.module('app')
        .factory('ProjectResource' , function($resource){
            var ProjectResource = $resource('/api/cars/:id', {id: '@id'} ,
                                {update: {method: 'PUT', isArray: false} ,
                                  });
            return ProjectResource;
        });

}());