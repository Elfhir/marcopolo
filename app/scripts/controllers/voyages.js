'use strict';

(function() {

	var marcopoloApp = angular.module('marcopoloApp.voyages', []);

	marcopoloApp.controller('VoyagesCtrl', ['$scope', function ($scope) {
		$scope.year = '2014';
	}]);

})();