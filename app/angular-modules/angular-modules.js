'use strict';

// 創建模組："myApp" 參數對應執行應用的 HTML 元素。現在你可以在 AngularJS 應用中添加控制器，指令，過濾器等。在模組定義中 [] 參數用於定義模塊的依賴關係。
angular.module('myApp.angular-modules', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-modules', {
            templateUrl: 'angular-modules/angular-modules.html',
            controller: 'AngularModulesCtrl'
        });
    }])

    // 添加控制器：使用 ng-controller 指令來添加應用的控制器。
    .controller('AngularModulesCtrl', ['$scope', function ($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
    }])

    // 添加指令。
    .directive("w3TestDirective", function () {
        return {
            template: "I was made in a directive constructor!"
        };
    });
