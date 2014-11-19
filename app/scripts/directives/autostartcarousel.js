'use strict';

(function() {

	var marcopoloApp = angular.module('marcopoloApp.autostartcarousel', []);
/**
 * @ngdoc directive
 * @name marcopoloApp.directive:autostartCarousel
 * @description
 * # autostartCarousel
 */

	marcopoloApp.directive('autostartCarousel', [function () {
		return {
			restrict: 'A',
			link: function (scope, element) {
				angular.element('.carousel').carousel({
					interval: 7000
				});			
			}
		};
	}]);

})();