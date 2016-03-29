'use strict';

angular.module('myApp.angular-services', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-services', {
            templateUrl: 'angular-services/angular-services.html',
            controller: 'AngularServicesCtrl',
            controllerAs: 'service'
        });
    }])

    .controller('AngularServicesCtrl', ['$location', '$http', '$timeout', '$interval', 'toHex', function ($location, $http, $timeout, $interval, toHex) {
        var service = this;

        // $location 服務，它可以返回當前頁面的 URL 地址。AngularJS 使用 $location 服務比使用 window.location 對象更好。
        this.url = $location.absUrl();

        // $http 是 AngularJS 應用中最常用的服務。服務向服務器發送請求，應用響應服務器傳送過來的數據。
        $http.get("angular-services/welcome.html").then(function (res) {
            service.welcome = res.data;
        });

        this.header = "Hello World!";
        // AngularJS $timeout 服務對應了 JS window.setTimeout 函數。
        $timeout(function () {
            service.header = "How are you today?";
        }, 2000);

        // AngularJS $interval 服務對應了 JS window.setInterval 函數。
        $interval(function () {
            service.time = new Date().toLocaleTimeString();
        }, 1000);

        this.hex = function (data) {
            return toHex.func(data);
        }

        this.counts = [255, 251, 200];
    }])

    // 你可以創建自定義的訪問，鏈接到你的模塊中。
    .service('toHex', function () {
        this.func = function (data) {
            return data.toString(16);
        };
    })

    // 當你創建了自定義服務，並連接到你的應用上後，你可以在控制器，指令，過濾器或其他服務中使用它。
    .filter('format', ['toHex', function (toHex) {
        return function (data) {
            return toHex.func(data);
        };
    }]);
