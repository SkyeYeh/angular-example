'use strict';

angular.module('myApp.angular-validation', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-validation', {
            templateUrl: 'angular-validation/angular-validation.html',
            controller: 'AngularValidationCtrl',
            controllerAs: 'validation'
        });
    }])

    .controller('AngularValidationCtrl', [function () {
        this.user = 'John Doe';
        this.email = 'john.doe@gmail.com';
    }])

    .directive('myDirective', function () {
        return {
            require: 'ngModel',
            // mCtrl: 與 controller 連結。
            link: function (scope, element, attr, mCtrl) {
                /**
                 * 驗證值是否包含 e，如果包含則回傳 true；否則回傳 false。
                 * @param value input 的 vlaue
                 * @returns {*}
                 */
                function myValidation(value) {
                    if (value.indexOf('e') > -1) {
                        mCtrl.$setValidity('charE', true);
                    } else {
                        mCtrl.$setValidity('charE', false);
                    }
                    return value;
                }

                // 每次輸入值時執行此函式。
                mCtrl.$parsers.push(myValidation);
            }
        };
    });
