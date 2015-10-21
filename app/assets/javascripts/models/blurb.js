angular.module('AppTrackerModels').factory('Blurb', ['$http', 'ModelFactory', function($http, ModelFactory) {
  function Blurb(data) {
    this.urlBase = "/api/blurbs"
    this.updateAttributes(data);
  }

  ModelFactory.inherits(Blurb, ModelFactory.BaseModel);

  return Blurb;


}])
