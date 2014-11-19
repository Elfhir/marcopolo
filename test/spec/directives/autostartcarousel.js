'use strict';

describe('Directive: autostartCarousel', function () {

  // load the directive's module
  beforeEach(module('marcopoloApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<autostart-carousel></autostart-carousel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the autostartCarousel directive');
  }));
});
