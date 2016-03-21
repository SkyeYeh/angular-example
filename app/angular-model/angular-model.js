'use strict';

angular.module('myApp.angular-model', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-model', {
            templateUrl: 'angular-model/angular-model.html',
            controller: 'AngularModelCtrl'
        });
    }])

    .controller('AngularModelCtrl', ['$scope', function ($scope) {
        $scope.name = "John Doe";
        $scope.myText = 'post@myweb.com';
    }]);
