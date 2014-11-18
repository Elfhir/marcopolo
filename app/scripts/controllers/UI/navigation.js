'use strict';

(function() {

	var marcopoloApp = angular.module('marcopoloApp.ui.navigation', []);

	/**
	 * @ngdoc function
	 * @name marcopoloApp.controller:NavigationCtrl
	 * @description
	 * # HomeCtrl
	 * Controller of the marcopoloApp doing the changement of color on links
	 * during navigation
	 */
	marcopoloApp.controller('NavigationCtrl', ['$scope', '$location', function ($scope, $location) {
		
		// returnt the url path
		$scope.isActive = function (viewLocation) {
			return viewLocation === $location.path();
		};

		// prevent navigation (anchor)
		$scope.preventDefault = function(event) {
			event.preventDefault();
		};

		$scope.$on('$destroy', function() {
			console.log('NavigationCtrl is destroyed');
		});

	}]);

})();