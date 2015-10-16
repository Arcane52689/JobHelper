var AppTrackerModels = angular.module('AppTrackerModels');


AppTrackerModels.factory('Company', ['$http', 'BaseModel', function($http, BaseModel) {
    function Company(data) {

    }

    modelInherits(Company, BaseModel);

    

  }
}])
