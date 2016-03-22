'use strict';

angular.module('myApp.angular-scopes', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-scopes', {
            templateUrl: 'angular-scopes/angular-scopes.html',
            controller: 'AngularScopesCtrl'
        });
    }])

    // 當你在 AngularJS 創建控制器時，你可以將 $scope 對象當作一個參數傳遞。
    .controller('AngularScopesCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.carName = "Volvo";
        $scope.name = "John Doe";
        $scope.names = ["Emil", "Tobias", "Linus"];
        $scope.color = "red";

        $scope.getColor = function () {
            return $rootScope.color;
        }
    }])

    // $rootScope 可作用於整個應用中。是各個 controller 中 scope 的橋樑。用 rootscope 定義的值，可以在各個 controller 中使用。
    .run(['$rootScope', function ($rootScope) {
        $rootScope.color = 'blue';
    }]);
