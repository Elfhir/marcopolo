'use strict';

(function() {

	var marcopoloApp = angular.module('marcopoloApp.users', []);

	/**
	 * @ngdoc function
	 * @name marcopoloApp.controller:UsersCtrl
	 * @description
	 * # UsersCtrl
	 * Controller of the marcopoloApp
	 * For basic users page
	 */
	marcopoloApp.controller('UsersCtrl', ['$scope','$http', '$q','$routeParams', function ($scope, $http, $q, $routeParams) {
		var users = $http.get('/data/users/2014.11.13.json');
		var voyages = $http.get('/data/voyages/2014.11.13.json');

		$q.all([users, voyages]).then(function(data, status, headers, config) { 
			$scope.users = data[0];
			$scope.voyages = data[1];
			$scope.route = $routeParams;
		});
	}]);

	/**
	 * @ngdoc function
	 * @name marcopoloApp.controller:RegisterCtrl
	 * @description
	 * # RegisterCtrl
	 * Controller of the marcopoloApp
	 * For basic Register page
	 */
	marcopoloApp.controller('RegisterCtrl', function ($scope) {

	});

	/**
	 * @ngdoc function
	 * @name marcopoloApp.controller:ConnexionCtrl
	 * @description
	 * # ConnexionCtrl
	 * Controller of the marcopoloApp
	 * For basic Connexion page
	 */
	marcopoloApp.controller('ConnexionCtrl', function ($scope) {

	});

})();