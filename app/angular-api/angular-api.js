'use strict';

angular.module('myApp.angular-api', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-api', {
            templateUrl: 'angular-api/angular-api.html',
            controller: 'AngularApiCtrl',
            controllerAs: 'api'
        });
    }])

    .controller('AngularApiCtrl', [function () {
        this.x1 = 'John';
        this.x2 = angular.lowercase(this.x1);
        this.x3 = angular.uppercase(this.x1);
        this.x4 = angular.isString(this.x1);
        this.x5 = angular.isNumber(this.x1);
    }]);
