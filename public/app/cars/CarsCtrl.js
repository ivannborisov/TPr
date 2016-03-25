(function(){

    function CarsCtrl($interval,$http,$scope, ProjectResource){
        $scope.projects = ProjectResource.query();
        //console.log('asdasd');
        //$http.get('/api/cars')
        //    .success(function(data) {
        //        console.log('qko');
        //        $scope.projects = data;
        //    });

        $scope.sortOption = [
            {value: "title", text: "Sort by Title"},
            {value: "date", text: "Sort by Date"}];

        $interval(function() {
            $scope.projects = ProjectResource.query();
        },10000)
    }

    angular.module('app.controllers')
        .controller('CarsCtrl' , ['$interval','$http','$scope','ProjectResource',CarsCtrl]);

}());