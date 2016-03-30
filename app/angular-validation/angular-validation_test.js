'use strict';

describe('myApp.angular-validation module', function () {
    beforeEach(module('myApp.angular-validation'));

    var $controller;
    var $compile;
    var $rootScope;

    beforeEach(inject(function (_$controller_, _$compile_, _$rootScope_) {
        $controller = _$controller_;
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    describe('AngularValidationCtrl controller', function () {
        it('should inti parameter', function () {
            var controller = $controller('AngularValidationCtrl');

            expect(controller).toBeDefined();
        });
    });
});
