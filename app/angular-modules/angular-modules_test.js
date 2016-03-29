'use strict';

describe('myApp.angular-modules module', function () {
    var $compile;
    var $rootScope;

    beforeEach(module('myApp.angular-modules'));
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    describe('AngularModulesCtrl controller', function () {
        it('scope should init', inject(function ($controller) {
            var $scope = {};
            var angularModulesCtrl = $controller('AngularModulesCtrl', {$scope: $scope});

            expect(angularModulesCtrl).toBeDefined();
            expect($scope.firstName).toEqual('John');
            expect($scope.lastName).toEqual('Doe');
        }));
    });

    describe('w3TestDirective directive', function () {
        it('should contain html', inject(function () {
            // 編譯包含指令的 HTML。
            var element = $compile("<div w3-test-directive></div>")($rootScope);

            // 轉換所有表達式。
            $rootScope.$digest();

            expect(element.html()).toContain("I was made in a directive constructor!");
        }));
    });
});
