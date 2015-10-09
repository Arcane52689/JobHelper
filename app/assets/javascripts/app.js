var AppTracker = angular.module("AppTracker", ['ngRoute', 'templates'])


AppTracker.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when( '/',
    templateUrl: 'portfolio.html'
    controller: 'portfolioCtrl',
    controllerAs: 'portfolio'

  )
}])
