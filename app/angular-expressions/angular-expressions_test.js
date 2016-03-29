'use strict';

describe('myApp.angular-expressions module', function () {
    beforeEach(module('myApp.angular-expressions'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        // 注入參數。
        $controller = _$controller_;
    }));

    describe('AngularExpressionsCtrl controller', function () {
        it('should be defined', function () {
            var controller = $controller('AngularExpressionsCtrl');
            expect(controller).toBeDefined();
        });
    });
});
