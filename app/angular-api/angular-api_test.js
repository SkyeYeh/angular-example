'use strict';

describe('myApp.angular-api module', function () {
    beforeEach(module('myApp.angular-api'));

    var $controller;
    var $compile;
    var $rootScope;

    beforeEach(inject(function (_$controller_, _$compile_, _$rootScope_) {
        $controller = _$controller_;
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    describe('AngularApiCtrl controller', function () {
        it('should inti parameter', function () {
            var controller = $controller('AngularApiCtrl');

            expect(controller).toBeDefined();
            expect(controller.x1).toEqual('John');
            expect(controller.x2).toEqual('john');
            expect(controller.x3).toEqual('JOHN');
            expect(controller.x4).toEqual(true);
            expect(controller.x5).toEqual(false);
        });
    });
});
