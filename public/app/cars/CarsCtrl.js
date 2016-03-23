(function(){

    function CarsCtrl($scope, ProjectResource){
        $scope.projects = ProjectResource.query();
        $scope.sortOption = [
            {value: "title", text: "Sort by Title"},
            {value: "date", text: "Sort by Date"}];
    }

    angular.module('app.controllers')
        .controller('CarsCtrl' , ['$scope','ProjectResource',CarsCtrl]);

}());