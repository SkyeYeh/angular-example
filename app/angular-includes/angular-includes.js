'use strict';

angular.module('myApp.angular-includes', ['ngRoute'])
    .config(['$routeProvider', '$sceDelegateProvider', function ($routeProvider, $sceDelegateProvider) {
        $routeProvider.when('/angular-includes', {
            templateUrl: 'angular-includes/angular-includes.html',
            controller: 'AngularIncludesCtrl',
            controllerAs: 'includes'
        });

        // 透過 config 將網域加入白名單。
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://www.refsnesdata.no/**'
        ]);
    }])

    .controller('AngularIncludesCtrl', ['$http', function ($http) {
        var includes = this;

        $http.get('angular-includes/customers.json').then(function (response) {
            includes.names = response.data.records;
        });
    }]);
