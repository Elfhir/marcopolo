'use strict';

describe('Directive: isSamePassword', function () {

  // load the directive's module
  beforeEach(module('marcopoloApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<is-same-password></is-same-password>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the isSamePassword directive');
  }));
});
