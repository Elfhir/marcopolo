'use strict';

(function() {

	var app = angular.module('marcopoloApp.voyages', []);

	app.controller('VoyagesCtrl', ['$scope', function ($scope) {
		$scope.year = '2014';
	}]);

})();