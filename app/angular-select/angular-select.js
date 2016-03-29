'use strict';

angular.module('myApp.angular-select', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-select', {
            templateUrl: 'angular-select/angular-select.html',
            controller: 'AngularSelectCtrl',
            controllerAs: 'select'
        });
    }])

    .controller('AngularSelectCtrl', [function () {
        this.names = ["Emil", "Tobias", "Linus"];

        this.cars = [
            {model: "Ford Mustang", color: "red"},
            {model: "Fiat 500", color: "white"},
            {model: "Volvo XC90", color: "black"}
        ];

        this.oldCars = {
            car01: "Ford",
            car02: "Fiat",
            car03: "Volvo"
        };

        this.newCars = {
            car01: {brand: "Ford", model: "Mustang", color: "red"},
            car02: {brand: "Fiat", model: "500", color: "white"},
            car03: {brand: "Volvo", model: "XC90", color: "black"}
        }
    }]);
