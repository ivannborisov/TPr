(function(){

    function CarDetailsCtrl($scope, $routeParams, ProjectResource){
        $scope.project = ProjectResource.get({id:$routeParams.id})
    }

    angular.module('app.controllers')
        .controller('CarDetailsCtrl' , ['$scope','$routeParams', 'ProjectResource',CarDetailsCtrl]);

}());