'use strict';

angular.module('myApp.directives', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angularjs_directives', {
            templateUrl: 'angularjs_directives/angularjs_directives.html',
            controller: 'DirectivesCtrl'
        });
    }])

    .controller('DirectivesCtrl', [function () {

    }]);
