'use strict';

describe('myApp.angular-directives module', function () {
    var $compile;
    var $rootScope;

    beforeEach(module('myApp.angular-directives'));
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    describe('AngularDirectivesCtrl controller', function () {
        it('scope should init', inject(function ($controller) {
            var angularModulesCtrl = $controller('AngularDirectivesCtrl');

            expect(angularModulesCtrl).toBeDefined();
        }));
    });

    describe('testDirective directive', function () {
        it('should contain html', inject(function () {
            // 編譯包含指令的 HTML。
            var element = $compile('<test-directive></test-directive>')($rootScope);

            // 轉換所有表達式。
            $rootScope.$digest();

            expect(element.html()).toContain('Made by a directive!');
        }));
    });

    describe('testDirectiveClass directive', function () {
        it('should contain html', inject(function () {
            // 編譯包含指令的 HTML。
            var element = $compile('<div class="test-directive-class"></div>')($rootScope);

            // 轉換所有表達式。
            $rootScope.$digest();

            expect(element.html()).toContain('Made by a directive!');
        }));
    });

    describe('testDirectiveComment directive', function () {
        it('should contain html', inject(function () {
            // 編譯包含指令的 HTML。
            var element = $compile('<!-- directive: test-directive-comment -->')($rootScope);

            // 轉換所有表達式。
            $rootScope.$digest();

            expect(element.html()).toContain('Made by a directive!');
        }));
    });

    describe('testDirectiveRestrictions directive', function () {
        it('should contain html', inject(function () {
            // 編譯包含指令的 HTML。
            var element = $compile("<div test-directive-restrictions></div>")($rootScope);

            // 轉換所有表達式。
            $rootScope.$digest();

            expect(element.html()).toContain('Made by a directive!');
        }));
    });
});
