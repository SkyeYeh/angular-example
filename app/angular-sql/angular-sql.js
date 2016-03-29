'use strict';

angular.module('myApp.angular-sql', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-sql', {
            templateUrl: 'angular-sql/angular-sql.html',
            controller: 'AngularSqlCtrl',
            controllerAs: 'sql'
        });
    }])

    .controller('AngularSqlCtrl', ['$http', function ($http) {
    }]);
