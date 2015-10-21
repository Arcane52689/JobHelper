var AppTrackerControllers = angular.module("AppTrackerControllers")

AppTrackerControllers.controller("CompaniesCtrl", ['$http', 'CollectionFactory','Company', function($http, CollectionFactory, Company) {

  this.companies = new CollectionFactory.BaseCollection({
    model: Company,
    url: 'api/companies'
  })

  this.companies.fetch();
}])
