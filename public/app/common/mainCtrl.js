(function () {
    'use strict';

    function MainController () {
        var vm = this;

        vm.title = "Tuning projects ";
    }


    angular.module('app.controllers')
        .controller('MainController', [ MainController]);

}());