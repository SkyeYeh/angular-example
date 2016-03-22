'use strict';

angular.module('myApp.angular-http', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-http', {
            templateUrl: 'angular-http/angular-http.html',
            controller: 'AngularHttpCtrl'
    });,
    }])
    .controller('AngularHttpCtrl', ['$scope', '$http', function ($scope, $http) {
        // $http 是 AngularJS 中的一個核心服務，用於讀取遠程服務器的數據。
        $http.get('angular-http/welcome.html').then(function (res) {
            $scope.welcome = res.data;
        });
    }]);

