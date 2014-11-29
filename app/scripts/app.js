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
    'duScroll',
    'marcopoloApp.ui.navigation',
    'marcopoloApp.home',
    'marcopoloApp.voyages',
    'marcopoloApp.users',
    'marcopoloApp.about',
    'marcopoloApp.konamicode',
    'marcopoloApp.autostartcarousel',
    'marcopoloApp.users.issamepassword'
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
      .when('/voyages/:id', {
        templateUrl: 'views/voyage.html',
        controller: 'VoyageCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/users/:id', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/connexion', {
        templateUrl: 'views/connexion.html',
        controller: 'ConnexionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

})();