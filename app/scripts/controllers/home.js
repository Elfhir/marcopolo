'use strict';

(function() {

	var marcopoloApp = angular.module('marcopoloApp.home', []);

	/**
	 * @ngdoc function
	 * @name marcopoloApp.controller:HomeCtrl
	 * @description
	 * # HomeCtrl
	 * Controller of the marcopoloApp Home page
	 */
	marcopoloApp.controller('HomeCtrl', ['$scope', function ($scope) {
		$scope.author = 'Elfhir';
	}]);

})();