'use strict';

describe('myApp.angular-http module', function () {
    beforeEach(module('myApp.angular-http'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('AngularHttpCtrl controller', function () {
        it('should inti parameter', function () {
            var controller = $controller('AngularHttpCtrl');

            expect(controller).toBeDefined();
        });
    });
});
