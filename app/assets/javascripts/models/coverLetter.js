angular.module('AppTrackerModels').factory('CoverLetter', ['ModelFactory', '$sce',  function(ModelFactory, $sce) {
  var CoverLetter = function(data) {
    this.urlBase = '/api/cover_letters'
    this.updateAttributes(data);
  }

  ModelFactory.inherits(CoverLetter, ModelFactory.BaseModel);

  

  return CoverLetter
}])
