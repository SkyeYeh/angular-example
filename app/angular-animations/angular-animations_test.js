'use strict';

describe('myApp.angular-animations module', function () {
    beforeEach(module('myApp.angular-animations'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('AngularAnimationsCtrl controller', function () {
        it('should init parameter', function () {
            var controller = $controller('AngularAnimationsCtrl');

            expect(controller).toBeDefined()
        });
    });
});
