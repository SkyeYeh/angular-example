'use strict';

describe('myApp.angular-select module', function () {
    beforeEach(module('myApp.angular-select'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('AngularSelectCtrl controller', function () {
        it('should inti parameter', function () {
            var controller = $controller('AngularSelectCtrl');

            expect(controller).toBeDefined();
            expect(controller.names.length).toEqual(3);
            expect(controller.cars.length).toEqual(3);
            expect(controller.oldCars).toBeDefined();
            expect(controller.newCars).toBeDefined();
        });
    });
});
