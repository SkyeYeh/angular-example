'use strict';

angular.module('myApp.angular-controllers', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-controllers', {
            templateUrl: 'angular-controllers/angular-controllers.html',
            controller: 'AngularControllersCtrl'
        });
    }])

    // AngularControllersCtrl 函數是一個 JavaScript 函數。控制器的 $scope（相當於作用域、控制範圍）用來保存 AngularJS Model (模型)的對象。
    .controller('AngularControllersCtrl', ['$scope', function ($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";

        $scope.fullName = function () {
            return $scope.firstName + " " + $scope.lastName;
        };

        $scope.names = [
            {name: 'Jani', country: 'Norway'},
            {name: 'Hege', country: 'Sweden'},
            {name: 'Kai', country: 'Denmark'}
        ];
    }]);
