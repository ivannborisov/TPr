(function () {
    'use strict';

    function MainController () {
        var vm = this;

        vm.title = "Titlee";


    }


    angular.module('app.controllers')
        .controller('MainController', [ MainController]);

}());