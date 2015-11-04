angular.module('AppTrackerModels').factory('CoverLetter', ['BaseModel', '$sce',  function(BaseModel, $sce) {
  var CoverLetter = function(data) {
    this.urlBase = '/api/cover_letters'
    this.updateAttributes(data);
  }

  BaseModel.parentOf(CoverLetter);

  CoverLetter.prototype.updateAttributes = function(data) {
    BaseModel.prototype.updateAttributes.call(this, data)
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
