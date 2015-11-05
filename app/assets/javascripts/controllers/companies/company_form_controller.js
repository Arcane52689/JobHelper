angular.module('AppTrackerControllers').controller('CompanyFormCtrl',['$http','Company', '$routeParams', 'MyFlash', function($http, Company, $routeParams, MyFlash) {
  if ($routeParams['id']){
    this.company = new Company({ id: $routeParams['id']});
    this.company.fetch();
    this.editing = false;
  } else {
    this.company = new Company();
    this.editing = true;
  }



  this.update = function() {
    this.company.save({success: function(resp) {
      this.editing = false;
    }.bind(this),
    error: function(resp) {
      MyFlash.error(resp.errors)
    }})
  }

  this.beginEdit = function() {
    this.editing = true;
  }

}])
