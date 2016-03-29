'use strict';

describe('myApp.angular-filters module', function () {
    beforeEach(module('myApp.angular-filters'));

    var $controller;
    var $rootScope;
    var $filter;

    beforeEach(inject(function (_$controller_, _$rootScope_, _$filter_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $filter = _$filter_;
    }));

    describe('AngularFiltersCtrl controller', function () {
        it('should inti parameter', function () {
            var controller = $controller('AngularFiltersCtrl');

            expect(controller).toBeDefined();

            expect(controller.firstName).toEqual('John');
            expect(controller.lastName).toEqual('Doe');
            expect(controller.names.length).toEqual(9);
            expect(controller.price).toEqual(58);

            controller.orderByMe(3);
            expect(controller.colName).toEqual(3);
        });
    });

    describe('myFormat filter', function () {
        it('should filter an object name', function () {
            var filter = $filter('myFormat');
            expect(filter({name: 'The quick brown fox jumps over the lazy dog'})).toEqual('ThE QuIcK BrOwN FoX JuMpS OvEr tHe lAzY DoG');
        });
    });
});
