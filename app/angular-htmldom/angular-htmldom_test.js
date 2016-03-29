'use strict';

describe('myApp.angular-htmldom module', function () {
    beforeEach(module('myApp.angular-htmldom'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('AngularHtmldomCtrl controller', function () {
        it('should inti parameter', function () {
            var controller = $controller('AngularHtmldomCtrl');

            expect(controller).toBeDefined();
            expect(controller.mySwitch).toEqual(true);
            expect(controller.hour).toBeGreaterThan(12);
        });
    });
});
