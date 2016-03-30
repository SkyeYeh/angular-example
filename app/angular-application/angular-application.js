'use strict';

// 需使用 ngAnimate module。
angular.module('myApp.angular-application', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-application', {
            templateUrl: 'angular-application/angular-application.html',
            controller: 'AngularApplicationCtrl',
            controllerAs: 'application'
        });
    }])

    .controller('AngularApplicationCtrl', function () {
        var application = this;

        this.products = ['Milk', 'Bread', 'Cheese'];

        /**
         * 將 item 加入 products。
         */
        this.addItem = function () {
            if (this.products.indexOf(application.item) > -1) {
                this.errorText = 'The item is already in your shopping list.';
            } else {
                this.products.push(this.item);
                this.item = '';
                this.errorText = '';
            }
        };

        /**
         * 移除 products 中指定元素移除。
         */
        this.removeItem = function (index) {
            this.products.splice(index, 1);
            this.errorText = '';
        };
    });
