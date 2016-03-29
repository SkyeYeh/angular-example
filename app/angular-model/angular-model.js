'use strict';

angular.module('myApp.angular-model', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-model', {
            templateUrl: 'angular-model/angular-model.html',
            controller: 'AngularModelCtrl',
            controllerAs: 'model'
        });
    }])

    .controller('AngularModelCtrl', function () {
        this.name = "John Doe";
        this.myText = 'post@myweb.com';
    });
