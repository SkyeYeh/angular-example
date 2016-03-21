'use strict';

angular.module('myApp.angular-filters', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-filters', {
            templateUrl: 'angular-filters/angular-filters.html',
            controller: 'AngularFiltersCtrl'
        });
    }])

    .controller('AngularFiltersCtrl', ['$scope', function ($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";

        $scope.names = [
            {name: 'Jani', country: 'Norway'},
            {name: 'Carl', country: 'Sweden'},
            {name: 'Margareth', country: 'England'},
            {name: 'Hege', country: 'Norway'},
            {name: 'Joe', country: 'Denmark'},
            {name: 'Gustav', country: 'Sweden'},
            {name: 'Birgit', country: 'Denmark'},
            {name: 'Mary', country: 'England'},
            {name: 'Kai', country: 'Norway'}
        ];

        $scope.price = 58;

        $scope.orderByMe = function (colName) {
            $scope.colName = colName;
        }
    }])

    .filter('myFormat', function () {
        return function (inputs) {
            var input;
            var result = "";
            inputs = inputs['name'].split("");
            for (var i = 0; i < inputs.length; i++) {
                input = inputs[i];
                if (i % 2 == 0) {
                    input = input.toUpperCase();
                }
                result += input;
            }
            return result;
        };
    });
