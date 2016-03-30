'use strict';

describe('myApp.angular-forms module', function () {
    beforeEach(module('myApp.angular-forms'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('AngularFormsCtrl controller', function () {
        it('should inti parameter', function () {
            var controller = $controller('AngularFormsCtrl');

            expect(controller).toBeDefined();
            expect(controller.firstName).toEqual('Jone');
            expect(controller.master).toBeDefined();

            controller.reset();

            expect(controller.user).toEqual(controller.master);
        });
    });
});
