'use strict';

(function () {

/**
 * @ngdoc overview
 * @name marcopoloApp
 * @description
 * # marcopoloApp
 *
 * Main module of the application.
 */
var marcopoloApp = angular.module('marcopoloApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'marcopoloApp.ui.navigation',
    'marcopoloApp.home',
    'marcopoloApp.voyages',
    'marcopoloApp.about'
  ]);

marcopoloApp
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/voyages', {
        templateUrl: 'views/voyages.html',
        controller: 'VoyagesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

})();