'use strict';

describe('myApp.angular-modules module', function () {
    beforeEach(module('myApp.angular-modules'));

    var $controller;
    var $compile;
    var $rootScope;

    beforeEach(inject(function (_$controller_, _$compile_, _$rootScope_) {
        $controller = _$controller_;
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    describe('AngularModulesCtrl controller', function () {
        it('should init scope', function () {
            var $scope = {};
            var controller = $controller('AngularModulesCtrl', {$scope: $scope});

            expect(controller).toBeDefined();
            expect($scope.firstName).toEqual('John');
            expect($scope.lastName).toEqual('Doe');
        });
    });

    describe('w3TestDirective directive', function () {
        it('should contain html', function () {
            // 編譯包含指令的 HTML。
            var element = $compile("<div w3-test-directive></div>")($rootScope);

            // 轉換所有表達式。
            $rootScope.$digest();

            expect(element.html()).toContain("I was made in a directive constructor!");
        });
    });
});
