'use strict';

describe('myApp.angular-expressions module', function () {

    beforeEach(module('myApp.angular-expressions'));

    describe('AngularExpressionsCtrl controller', function () {
        it('should be defined', inject(function ($controller) {
            var angularExpressionsCtrl = $controller('AngularExpressionsCtrl');
            expect(angularExpressionsCtrl).toBeDefined();
        }));
    });
});
