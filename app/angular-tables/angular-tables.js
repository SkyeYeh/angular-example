'use strict';

angular.module('myApp.angular-tables', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-tables', {
            templateUrl: 'angular-tables/angular-tables.html',
            controller: 'AngularTablesCtrl'
        });
    }])

    .controller('AngularTablesCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.orderBy = function (order) {
            $scope.order = order;
        };

        $http.get('angular-tables/customers.json').then(function (responses) {
            $scope.records = responses.data.records;
        });
    }]);
