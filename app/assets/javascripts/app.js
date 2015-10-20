angular.module('AppTrackerControllers', []);
angular.module('AppTrackerModels', []);
angular.module('AppTrackerCollections', []);
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
  .when('/profiles/new', {
    templateUrl: 'profiles/profile_form.html',
    controller: 'ProfileFormCtrl',
    controllerAs: 'form'
  })
  .when('/companies', {
    templateUrl: 'companies/company_index.html',
    controller: 'CompaniesCtrl',
    controllerAs: 'index'
  })
}])
