angular.module('AppTrackerModels').factory('Application', ['ModelFactory', function(ModelFactory) {
  var Application = function(data) {
    this.updateAttributes(data);
    this.urlBase = '/api/applications';
  }

  ModelFactory.inherits(Application, ModelFactory.BaseModel);

  return Application;
}])
