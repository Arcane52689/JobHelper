var AppTrackerControllers = angular.module("AppTrackerControllers")

AppTrackerControllers.controller("CompaniesCtrl", ['$http', 'Company', function($http, Company) {
  this.company = new Company({});
  
}])
