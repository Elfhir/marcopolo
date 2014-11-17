'use strict';

(function() {

	var marcopoloApp = angular.module('marcopoloApp.about', []);

	/**
	 * @ngdoc function
	 * @name marcopoloApp.controller:AboutCtrl
	 * @description
	 * # AboutCtrl
	 * Controller of the marcopoloApp that control
	 * the About page
	 */
	marcopoloApp.controller('AboutCtrl', ['$scope', function ($scope) {
		$scope.cvURI = 'http://www.jeremy-ta.fr/cv/cv-JeremyTa.pdf';
	}]);

})();