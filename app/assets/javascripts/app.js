angular.module('AppTrackerControllers', [])
angular.module('AppTrackerModels', []);
var AppTracker = angular.module("AppTracker", ['ngRoute', 'templates','AppTrackerControllers', 'AppTrackerModels'])



AppTracker.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when( '/', {
    templateUrl: 'portfolio.html',
    controller: 'PortfolioCtrl',
    controllerAs: 'portfolio'
  })
  .when('/profiles/:id/edit', {
    templateUrl: 'profiles/profile_form.html',
    controller: 'ProfileFormCtrl',
    controllerAs: 'form'
  })
}])
