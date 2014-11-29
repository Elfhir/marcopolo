'use strict';

(function() {

	var marcopoloApp = angular.module('marcopoloApp.voyages', []);

	marcopoloApp.controller('VoyagesCtrl', ['$scope','$http', '$q', function ($scope, $http, $q) {
		var voyages = $http.get('/data/voyages/2014.11.13.json');

		$q.all([voyages]).then(function(data, status, headers, config) { 
			$scope.voyages = data[0];
		});
	}]);


	marcopoloApp.controller('VoyageCtrl', ['$scope','$http', '$q','$routeParams', function ($scope, $http, $q, $routeParams) {
		var users = $http.get('/data/users/2014.11.13.json');
		var voyages = $http.get('/data/voyages/2014.11.13.json');

		$q.all([users, voyages]).then(function(data, status, headers, config) { 
			$scope.users = data[0];
			$scope.voyages = data[1];
			$scope.route = $routeParams;
		});
	}]);

})();