var AppTrackerModels = angular.module('AppTrackerModels');


AppTrackerModels.factory('Company', ['$http', 'BaseModel', function($http, BaseModel) {
    function Company(data) {

      this.updateAttributes(data);
    }
    // ModelFactory.inherits(Company, ModelFactory.BaseModel);
    BaseModel.parentOf(Company);
    Company.prototype.url = function() {
      if (this.isNew()) {
        return "/api/companies";
      } else {
        return '/api/companies/' + this.id;
      }
    }



    return Company;

}])
