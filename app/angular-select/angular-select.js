'use strict';

angular.module('myApp.angular-select', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-select', {
            templateUrl: 'angular-select/angular-select.html',
            controller: 'AngularSelectCtrl'
        });
    }])

    .controller('AngularSelectCtrl', ['$scope', function ($scope) {
        $scope.names = ["Emil", "Tobias", "Linus"];

        $scope.cars = [
            {model: "Ford Mustang", color: "red"},
            {model: "Fiat 500", color: "white"},
            {model: "Volvo XC90", color: "black"}
        ];

        $scope.oldCars = {
            car01: "Ford",
            car02: "Fiat",
            car03: "Volvo"
        };

        $scope.newCars = {
            car01: {brand: "Ford", model: "Mustang", color: "red"},
            car02: {brand: "Fiat", model: "500", color: "white"},
            car03: {brand: "Volvo", model: "XC90", color: "black"}
        }
    }]);
