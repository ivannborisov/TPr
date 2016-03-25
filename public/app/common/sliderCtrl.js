(function () {

    function SliderController($http, $interval,$location, ProjectResource, projects){
        var vm = this;
        var prNum;



        function getProjects () {
            console.log('**********************************************************************');
            ProjectResource.query().$promise.then(function (results) {
                vm.mainPr = results[0];
                vm.smallPrs = results.slice(0,8);
                prNum = results.length;
            });
        }
        getProjects();


        var int = $interval(function() {
            if(prNum){
                console.log('Check for new projects');
                projects.checkForNewProjects(prNum)
                    .then(function(res){
                        if(res){
                            vm.mainPr = res.projects[0];
                            vm.smallPrs = res.projects;
                            prNum = res.projectsLength;
                            console.log(prNum);
                        }
                    });
            }
        },3500);



        vm.changeImg = function(project){
            vm.mainPr = project;
        };

        vm.isActive = function (viewLocation){
            return viewLocation === $location.path();
        }


    }


    angular.module('app.controllers')
        .controller('SliderController', ['$http','$interval', '$location','ProjectResource','projects', SliderController]);
}());