'use strict';

describe('myApp.angular-includes module', function () {
    beforeEach(module('myApp.angular-includes'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('AngularIncludesCtrl controller', function () {
        it('should inti parameter', function () {
            var controller = $controller('AngularIncludesCtrl');

            expect(controller).toBeDefined();
        });
    });
});
