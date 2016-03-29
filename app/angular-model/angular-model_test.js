'use strict';

describe('myApp.angular-model module', function () {
    beforeEach(module('myApp.angular-model'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('AngularModelCtrl controller', function () {
        it('should init parameter', function () {
            var controller = $controller('AngularModelCtrl');
            expect(controller.name).toEqual('John Doe');
            expect(controller.myText).toEqual('post@myweb.com');
        });
    });
});
