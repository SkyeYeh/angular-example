'use strict';

describe('myApp.angular-modules module', function () {
    beforeEach(module('myApp.angular-modules'));

    describe('angular-modules controller', function () {

        it('should ....', inject(function ($controller) {
            var $scope = {};
            var angularModulesCtrl = $controller('AngularModulesCtrl', {$scope: $scope});

            expect(angularModulesCtrl).toBeDefined();
            expect($scope.firstName).toEqual('John');
            expect($scope.lastName).toEqual('Doe');
        }));
    });
});
