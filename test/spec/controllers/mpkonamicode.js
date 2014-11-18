'use strict';

describe('Controller: MpkonamicodeCtrl', function () {

  // load the controller's module
  beforeEach(module('marcopoloApp'));

  var MpkonamicodeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MpkonamicodeCtrl = $controller('MpkonamicodeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
