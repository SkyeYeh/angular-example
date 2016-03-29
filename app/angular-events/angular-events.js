'use strict';

angular.module('myApp.angular-events', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/angular-events', {
            templateUrl: 'angular-events/angular-events.html',
            controller: 'AngularEventsCtrl',
            controllerAs: 'events'
        });
    }])

    .controller('AngularEventsCtrl', [function () {
        this.count = 0;

        this.myFunction = function () {
            this.count++;
        }

        this.showMe = false;

        this.myFunc = function () {
            this.showMe = !this.showMe;
        }

        this.myClient = function(myE) {
            this.x = myE.clientX;
            this.y = myE.clientY;
        }
    }]);
