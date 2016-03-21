(function () {

    function SliderController($interval,$location){
        var vm = this;


        var projects = [{img:'imgs/audi1.jpg', prName:'Audi 1'} ,
            {img:'imgs/audi3.jpg', prName:'Audi 2'} ,
            {img:'imgs/audi3.jpg', prName:'Audi 3'},
            {img:'imgs/audi3.jpg', prName:'Audi 4'},
            {img:'imgs/audi3.jpg', prName:'Audi 5'},
            {img:'imgs/audi3.jpg', prName:'Audi 6'},
            {img:'imgs/audi3.jpg', prName:'Audi 7'},
            {img:'imgs/audi3.jpg', prName:'Audi 8'},];


        vm.mainPr = projects[0];
        vm.smallPrs = projects;


        vm.changeImg = function(project){
            vm.mainPr = project;
        };

        vm.isActive = function (viewLocation){
            return viewLocation === $location.path();
        }


    }


    angular.module('app.controllers')
        .controller('SliderController', ['$interval', '$location', SliderController]);
}());