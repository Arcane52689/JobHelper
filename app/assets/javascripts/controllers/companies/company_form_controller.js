angular.module('AppTrackerControllers').controller('CompanyFormCtrl',['$http','Company', '$routeParams', function($http, Company, $routeParams) {
  this.company = new Company({ id: $routeParams['id']});
  this.company.fetch();
  this.editing = false;

  this.update = function() {
    this.company.save({success: function(resp) {
      this.editing = false;
    }.bind(this),
  error: function(resp) {
    console.log(resp)
  }})
  }

  this.beginEdit = function() {
    debugger;
    this.editing = true;
  }

}])
