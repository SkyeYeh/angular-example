'use strict';

angular.module('myApp.angular_model', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular_model', {
            templateUrl: 'angular_model/angular_model.html',
            controller: 'AngularModelCtrl'
        });
    }])

    .controller('AngularModelCtrl', ['$scope', function ($scope) {
        $scope.name = "John Doe";

        $scope.myText = 'post@myweb.com';
    }]);
