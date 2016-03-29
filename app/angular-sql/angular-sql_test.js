'use strict';

describe('myApp.angular-sql module', function () {
    beforeEach(module('myApp.angular-sql'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('AngularSqlCtrl controller', function () {
        it('should inti parameter', function () {
            var controller = $controller('AngularSqlCtrl');

            expect(controller).toBeDefined();
        });
    });
});
