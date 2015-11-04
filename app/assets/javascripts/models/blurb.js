angular.module('AppTrackerModels').factory('Blurb', ['$http', 'BaseModel', function($http, BaseModel) {
  function Blurb(data) {
    this.urlBase = "/api/blurbs"
    this.updateAttributes(data);
  }

  BaseModel.parentOf(Blurb);

  return Blurb;


}])
