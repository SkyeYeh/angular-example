'use strict';

describe('myApp.angular-scopes module', function () {
    beforeEach(module('myApp.angular-scopes'));

    var $controller;
    var $rootScope;

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    describe('AngularScopesCtrl controller', function () {
        it('should inti parameter', function () {
            var $scope = {};

            $controller('AngularScopesCtrl', {$scope: $scope});

            expect($scope.carName).toEqual('Volvo');
            expect($scope.name).toEqual('John Doe');
            expect($scope.names).toEqual(['Emil', 'Tobias', 'Linus']);
            expect($scope.color).toEqual('red');
            expect($scope.getColor()).toEqual('blue');
            expect($rootScope.color).toEqual('blue');
        });
    });
});
