'use strict';

describe('myApp.angular-services module', function () {
    beforeEach(module('myApp.angular-services'));

    var $controller;
    var $filter;

    beforeEach(inject(function (_$controller_, _$filter_) {
        $controller = _$controller_;
        $filter = _$filter_;
    }));

    describe('AngularServicesCtrl controller', function () {
        it('should inti parameter', function () {
            var controller = $controller('AngularServicesCtrl');
            expect(controller.url).toBeDefined();
            //expect(controller.welcome).toEqual('Hello AngularJS Students');
            expect(controller.header).toEqual('Hello World!');
            //expect(controller.time).toBeDefined();
            expect(controller.hex(255)).toEqual('ff');
            expect(controller.counts.length).toEqual(3);
        });
    });

    describe('format controller', function () {
        it('should hex string', function () {
            var filter = $filter('format');

            expect(filter(255)).toEqual('ff');
        });
    });
});
