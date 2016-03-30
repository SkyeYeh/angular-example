'use strict';

angular.module('myApp.angular-forms', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-forms', {
            templateUrl: 'angular-forms/angular-forms.html',
            controller: 'AngularFormsCtrl',
            controllerAs: 'forms'
        });
    }])

    .controller('AngularFormsCtrl', [function () {
        this.firstName = 'Jone';
        this.master = {firstName: 'John', lastName: 'Doe'};

        /**
         * 設置了user 對象等於 master 對象。
         */
        this.reset = function () {
            this.user = angular.copy(this.master);
        };

        this.reset();
    }]);
