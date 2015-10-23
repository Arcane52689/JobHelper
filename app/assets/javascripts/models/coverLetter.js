angular.module('AppTrackerModels').factory('CoverLetter', ['ModelFactory', '$sce',  function(ModelFactory, $sce) {
  var CoverLetter = function(data) {
    this.urlBase = '/api/cover_letters'
    this.updateAttributes(data);
  }

  ModelFactory.inherits(CoverLetter, ModelFactory.BaseModel);

  CoverLetter.prototype.updateAttributes = function(data) {
    ModelFactory.BaseModel.prototype.updateAttributes.call(this, data)
    this.trustBody();
  }

  CoverLetter.prototype.trustBody = function() {
    if (!this.attributes.body) {
      this.attributes.body = "";
    }
    this.html = $sce.trustAsHtml(this.attributes.body);
  }

  return CoverLetter
}])
