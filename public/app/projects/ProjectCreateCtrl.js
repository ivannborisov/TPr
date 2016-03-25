(function() {
    'use strict';

    function ProjectCreateCtrl ($q, $location, ProjectResource) {
        var vm = this;
        vm.create = "create project";

        vm.createProject = function(project){



            var project = new ProjectResource(project);
            var deffered = $q.defer();

            project.$save().then(function () {
                $location.path('/cars');
                //deffered.resolve();
            },function (res){
                deffered.reject(res);
            });


            return deffered.promise;
        }
    }

    angular
        .module('app.controllers')
        .controller('ProjectCreateCtrl', ['$q','$location','ProjectResource' ,ProjectCreateCtrl]);
}());