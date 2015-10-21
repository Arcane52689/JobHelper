var AppTrackerModels = angular.module('AppTrackerModels');


AppTrackerModels.factory('Company', ['$http', 'ModelFactory', function($http, ModelFactory) {
    function Company(data) {

      this.updateAttributes(data);
    }
    ModelFactory.inherits(Company, ModelFactory.BaseModel);

    Company.prototype.url = function() {
      if (this.isNew()) {
        return "/api/companies";
      } else {
        return '/api/companies/' + this.id;
      }
    }



    return Company;

}])
