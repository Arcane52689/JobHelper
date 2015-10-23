angular.module('AppTrackerControllers').controller('ApplicationFormController', [ '$location', '$routeParams', 'Application', 'Collections', function($location, $routeParams, Application, Collections) {
  this.setup = function() {

    if ($routeParams['id']) {
      this.application = new Application({ 'id': $routeParams['id']})
      this.application.fetch();
      this.locked = true;
    } else {
      this.application = new Applicatoin();
      this.parseQuery();
      this.locked = false;
    }
  }

  this.parseQuery = function() {
    var query = location.search();
    ['company_id', 'cover_letter_id'].forEach(function(key) {
      if (query['key']) {
        this.application.set(key, query[key])
      }
    }.bind(this))
  }





}])
