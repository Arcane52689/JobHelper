angular.module('AppTrackerControllers', []);
angular.module('AppTrackerModels', []);
angular.module('AppTrackerCollections', []);
angular.module('AppTrackerDirectives', []);
angular.module('AppTrackerUtilities', []);

var AppTracker = angular.module("AppTracker", ['ngRoute', 'templates','AppTrackerControllers', 'AppTrackerModels', 'AppTrackerCollections', 'AppTrackerUtilities', 'AppTrackerDirectives', 'ngAnimate'])



AppTracker.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when( '/', {
    templateUrl: 'applications/applications_index.html',
    controller: 'ApplicationsIndexCtrl',
    controllerAs: 'index'
  })
  .when('/profiles/', {
    templateUrl: 'profiles/profiles_index.html',
    controller: 'ProfileIndexCtrl',
    controllerAs: 'profiles'
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
  .when('/companies/new', {
    templateUrl: 'companies/company_form.html',
    controller: 'CompanyFormCtrl',
    controllerAs: 'form'
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
  .when('/cover_letters', {
    templateUrl: 'cover_letters/cover_letter_index.html',
    controller: 'CoverLettersCtrl',
    controllerAs: 'index'
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

  .when('/cover_letters/:id', {
    templateUrl: 'cover_letters/cover_letter_index.html',
    controller: "CoverLettersCtrl",
    controllerAs: 'index'
  })
  .when('/applications/new', {
    templateUrl: 'applications/application_form.html',
    controller: 'ApplicationFormCtrl',
    controllerAs: 'form'
  })
  .when('/applications/', {
    templateUrl: 'applications/applications_index.html',
    controller: 'ApplicationsIndexCtrl',
    controllerAs: 'index'
  })


}])
