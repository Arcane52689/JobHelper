var AppTrackerModels = angular.module('AppTrackerModels');


AppTrackerModels.factory('Company', ['$http', 'ModelFactory', function($http, ModelFactory) {
    function Company(data) {

      this.updateAttributes(data);
    }

    Company.prototype.url = function() {
      if (this.isNew()) {
        return "/api/companies";
      } else {
        return '/api/compaines/' + this.id;
      }
    }

    ModelFactory.inherits(Company, ModelFactory.BaseModel);


    return Company;

}])
