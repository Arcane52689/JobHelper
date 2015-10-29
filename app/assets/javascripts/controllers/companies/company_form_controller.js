angular.module('AppTrackerControllers').controller('CompanyFormCtrl',['$http','Company', '$routeParams', function($http, Company, $routeParams) {
  if ($routeParams['id']){

    this.company = new Company({ id: $routeParams['id']});
    this.company.fetch();
  } else {
    this.company = new Company();
  }

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
    this.editing = true;
  }

}])
