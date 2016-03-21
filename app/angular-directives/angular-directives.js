'use strict';

angular.module('myApp.angular-directives', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-directives', {
            templateUrl: 'angular-directives/angular-directives.html',
            controller: 'AngularDirectivesCtrl'
        });
    }])

    .controller('AngularDirectivesCtrl', [function () {

    }])
    // 你可以使用.directive函數來添加自定義的指令。
    .directive("testDirective", function () {
        return {
            template: "<h1>Made by a directive!</h1>"
        };
    })
    // 你必須設置 restrict 的值為 "C" 才能通過類名來調用指令。
    .directive("testDirectiveClass", function () {
        return {
            restrict: "C",
            template: "<h1>Made by a directive!</h1>"
        };
    })
    // 我們需要在該實例添加 replace 屬性，否則評論是不可見的。
    // 注意：你必須設置 restrict 的值為 "M" 才能通過註釋來調用指令。
    .directive("testDirectiveComment", function () {
        return {
            restrict: "M",
            replace: true,
            template: "<h1>Made by a directive!</h1>"
        };
    })

    .directive("testDirectiveRestrictions", function () {
        return {
            // restrict：E 只限元素名使用；A 只限屬性使用；C 只限類名使用；M 只限註釋使用。默認值為 EA，即可以通過元素名和屬性名來調用指令。
            restrict: "A",
            template: "<h1>Made by a directive!</h1>"
        };
    });
