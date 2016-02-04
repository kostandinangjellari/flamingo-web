'use strict';

// Declare app level module which depends on views, and components
angular.module('flamingoApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/home', {
          templateUrl: 'components/home/home.html',
          controller: 'HomeCtrl'
      })
      .when('/statistics', {
          templateUrl: 'components/statistics/statistics.html',
          controller: 'StatisticsCtrl'
      });
  $routeProvider.otherwise({redirectTo: '/home'});
}]);