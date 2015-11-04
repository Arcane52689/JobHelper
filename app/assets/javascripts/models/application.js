angular.module('AppTrackerModels').factory('Application', ['BaseModel', function(BaseModel) {
  var Application = function(data) {
    this.updateAttributes(data);
    this.urlBase = '/api/applications';
  }

  BaseModel.parentOf(Application);

  return Application;
}])
