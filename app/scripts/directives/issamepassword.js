'use strict';

(function() {

	var marcopoloApp = angular.module('marcopoloApp.users.issamepassword',[]);
	
	/**
	 * @ngdoc directive
	 * @name marcopoloApp.directive:isSamePassword
	 * @description
	 * # isSamePassword
	 */
	marcopoloApp.directive('isSamePassword', [function () {
		return {
			restrict: 'A',
			scope: true,
			require: 'ngModel',
			link: function (scope, element, attrs, control) {
				var isSame = function () {

					var password1 = scope.ConfirmPassword;

					var password2 = scope.Password;
					
					return password1 == password2;
				};

				scope.$watch(isSame, function (isValid) {
					control.$setValidity('isSamePassword', isValid);
					console.dir(angular.element(scope.ConfirmPassword));
				});
			}
		};
	}]);

})();