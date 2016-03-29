'use strict';

describe('myApp.angular-controllers module', function () {
    beforeEach(module('myApp.angular-controllers'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('AngularControllersCtrl controller', function () {
        it('should inti parameter', function () {
            var $scope = {};
            $controller('AngularControllersCtrl', {$scope: $scope});
            expect($scope.firstName).toEqual('John');
            expect($scope.lastName).toEqual('Doe');
            expect($scope.fullName()).toEqual('John Doe');
            expect($scope.names.length).toEqual(3);
        });
    });
});
