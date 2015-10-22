angular.module('AppTrackerModels').factory('CoverLetter', ['ModelFactory',  function(ModelFactory) {
  var CoverLetter = function(data) {
    this.urlBase = '/api/cover_letters'
    this.updateAttributes(data);
  }

  ModelFactory.inherits(CoverLetter, BaseModel);

  

  return CoverLetter
}])
