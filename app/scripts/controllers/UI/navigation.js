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
		$scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    };
	}]);

})();