angular.module('AppTrackerControllers', [])

var AppTracker = angular.module("AppTracker", ['ngRoute', 'templates','AppTrackerControllers'])



AppTracker.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when( '/', {
    templateUrl: 'portfolio.html',
    controller: 'PortfolioCtrl',
    controllerAs: 'portfolio'
  })
}])
