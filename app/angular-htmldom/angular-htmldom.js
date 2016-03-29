'use strict';

angular.module('myApp.angular-htmldom', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-htmldom', {
            templateUrl: 'angular-htmldom/angular-htmldom.html',
            controller: 'AngularHtmldomCtrl',
            controllerAs: 'htmldom'
        });
    }])

    .controller('AngularHtmldomCtrl', ['$http', function ($http) {
        this.mySwitch = true;

        this.hour = 13;
    }]);
