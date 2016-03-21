'use strict';

angular.module('myApp.angular-expressions', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-expressions', {
            templateUrl: 'angular-expressions/angular-expressions.html',
            controller: 'AngularExpressionsCtrl'
        });
    }])

    .controller('AngularExpressionsCtrl', [function () {

    }]);
