'use strict';

describe('myApp.angular-events module', function () {
    beforeEach(module('myApp.angular-events'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('AngularEventsCtrl controller', function () {
        it('should inti parameter', function () {
            var controller = $controller('AngularEventsCtrl');

            expect(controller).toBeDefined();
            expect(controller.count).toEqual(0);

            controller.myFunction();

            expect(controller.count).toEqual(1);

            expect(controller.showMe).toEqual(false);

            controller.myFunc();

            expect(controller.showMe).toEqual(true);
        });
    });
});
