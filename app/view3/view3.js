'use strict';

angular.module('myApp.view3', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/angularjs_expressions.html',
            controller: 'View3Ctrl'
        });
    }])

    .controller('View3Ctrl', [function () {
        //$scope.firstName = "John";
        //$scope.lastName = "Doe";
    }]);
