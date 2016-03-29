'use strict';

angular.module('myApp.angular-tables', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-tables', {
            templateUrl: 'angular-tables/angular-tables.html',
            controller: 'AngularTablesCtrl',
            controllerAs: 'table'
        });
    }])

    .controller('AngularTablesCtrl', ['$http', function ($http) {
        var tables = this;

        $http.get('angular-tables/customers.json').then(function (responses) {
            tables.records = responses.data.records;
        });
    }]);
