'use strict';

describe('myApp.angular-tables module', function () {
    beforeEach(module('myApp.angular-tables'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('AngularTablesCtrl controller', function () {
        it('should inti parameter', function () {
            var controller = $controller('AngularTablesCtrl');

            expect(controller).toBeDefined();
        });
    });
});
