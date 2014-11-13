'use strict';

(function() {

	var app = angular.module('marcopoloApp.about', []);

	/**
	 * @ngdoc function
	 * @name marcopoloApp.controller:AboutCtrl
	 * @description
	 * # AboutCtrl
	 * Controller of the marcopoloApp that control
	 * the About page
	 */
	app.controller('AboutCtrl', ['$scope', function ($scope) {
		$scope.cvURI = 'http://www.jeremy-ta.fr/cv/cv-JeremyTa.pdf';
	}]);

})();