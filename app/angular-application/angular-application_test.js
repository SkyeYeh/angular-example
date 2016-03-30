'use strict';

describe('myApp.angular-application module', function () {
    beforeEach(module('myApp.angular-application'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('AngularApplicationCtrl controller', function () {
        it('should init parameter', function () {
            var controller = $controller('AngularApplicationCtrl');

            expect(controller).toBeDefined();
            expect(controller.products).toEqual(['Milk', 'Bread', 'Cheese']);

            controller.item = 'foobar'
            controller.addItem();

            expect(controller.products).toEqual(['Milk', 'Bread', 'Cheese', 'foobar']);

            controller.removeItem(3);

            expect(controller.products).toEqual(['Milk', 'Bread', 'Cheese']);
        });
    });
});
