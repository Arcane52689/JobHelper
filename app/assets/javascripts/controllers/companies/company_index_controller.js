var AppTrackerControllers = angular.module("AppTrackerControllers")

AppTrackerControllers.controller("CompaniesCtrl", ['$http', 'CollectionFactory','Company', function($http, CollectionFactory, Company) {
  this.updateDisplayedCompanies = function() {
    this.displayedCompanies = this.companies.where(function(model) {
     var name = model.get('name').toLowerCase();
     var search = this.searchName.toLowerCase();
     return ( -1 < name.indexOf(search));
   }.bind(this))
  };



  this.searchName = "";

  this.companies = new CollectionFactory.BaseCollection({
    model: Company,
    url: 'api/companies'
  });

  this.companies.fetch({success: function() {
    this.updateDisplayedCompanies();
  }.bind(this)
});






}])
