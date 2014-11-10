'use strict';

/**
 * @ngdoc overview
 * @name marcopoloApp
 * @description
 * # marcopoloApp
 *
 * Main module of the application.
 */
angular
  .module('marcopoloApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/voyages', {
        templateUrl: 'views/vogages.html',
        controller: 'VoyagesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
