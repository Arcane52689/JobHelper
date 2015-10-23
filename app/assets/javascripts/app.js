angular.module('AppTrackerControllers', []);
angular.module('AppTrackerModels', []);
angular.module('AppTrackerCollections', []);


var AppTracker = angular.module("AppTracker", ['ngRoute', 'templates','AppTrackerControllers', 'AppTrackerModels', 'AppTrackerCollections'])



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
  .when('/companies/:id', {
    templateUrl: 'companies/company_form.html',
    controller: 'CompanyFormCtrl',
    controllerAs: 'form'
  })
  .when('/blurbs', {
    templateUrl: 'blurbs/blurb_form.html',
    controller: 'BlurbFormCtrl',
    controllerAs: 'form'
  })
  .when('/cover_letters/new', {
    templateUrl: 'cover_letters/cover_letter_form.html',
    controller: 'CoverLetterFormCtrl',
    controllerAs: 'form'
  })
  .when('/cover_letters/:id/edit', {
    templateUrl: 'cover_letters/cover_letter_form.html',
    controller: 'CoverLetterFormCtrl',
    controllerAs: 'form'
  })
}])
