angular.module('AppTrackerModels').factory('CoverLetter', ['BaseModel', '$http', '$sce',  function(BaseModel, $http, $sce) {
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

  CoverLetter.prototype.generatePDF = function(options) {
    var url = this.url() + "/generate_pdf";
    $http.put(url).success(function(resp) {
      this.fetch();
      options.success && options.success();
    }.bind(this))
    .error(function(resp) {
      options.error && options.error();
    })
  }

  return CoverLetter
}])
