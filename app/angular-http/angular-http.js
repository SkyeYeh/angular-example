'use strict';

angular.module('myApp.angular-http', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-http', {
            templateUrl: 'angular-http/angular-http.html',
            controller: 'AngularHttpCtrl'
        });
    }])

    // $http 是 AngularJS 中的一個核心服務，用於讀取遠程服務器的數據。
    .controller('AngularHttpCtrl', ['$scope', '$http', function ($scope, $http) {
        // $http 有幾種方法：.delete()、.get()、.head()、.jsonp()、.patch()、.post()、.put()。
        $http.get('angular-http/welcome.html').then(function (response) {
            // Succes。
            $scope.welcome = response.data;

            // response 具有這些屬性：
            // .config - 用來產生 request 的物件。
            // .data - 從伺服器攜帶 response 的字串或物件。
            // .headers - 用來獲得表頭信息的函式。
            // .status - 定義 HTTP status 的數字。
            // .statusText - 定義 HTTP status 的字串。
            $scope.config = response.config;
            $scope.data = response.data;
            $scope.headers = response.headers;
            $scope.status = response.status;
            $scope.statusText = response.statusText;
        }, function (response) {
            // Error。
            $scope.welcome = response.statusText;
        });

        $http.get('angular-http/customers.json').then(function (responses) {
            $scope.records = responses.data.records;
        });
    }])
