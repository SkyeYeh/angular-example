'use strict';

// 需使用 ngAnimate module。
angular.module('myApp.angular-animations', ['ngRoute', 'ngAnimate'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-animations', {
            templateUrl: 'angular-animations/angular-animations.html',
            controller: 'AngularAnimationsCtrl',
            controllerAs: 'animations'
        });
    }])

    .controller('AngularAnimationsCtrl', function () {
    });
