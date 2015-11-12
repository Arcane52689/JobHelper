angular.module('AppTrackerControllers').controller('CompanyFormCtrl',['$http','Company', '$routeParams', 'MyFlash', 'Application', function($http, Company, $routeParams, MyFlash, Application) {
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

  this.apply = function() {
    var app = new Application({
      company_id: this.company.id
    });
    var name = this.company.get('name');
    app.save({success: function() {
      MyFlash.success("application to " + name + " successfully created")
    },
      error: function(resp) {
        MyFlash.error(resp.errors);
      }})
  }

}])
