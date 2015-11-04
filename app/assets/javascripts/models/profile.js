var AppTrackerModels = angular.module('AppTrackerModels');

AppTrackerModels.factory('Profile', [ 'BaseModel', '$sce', function(BaseModel, $sce) {
  function Profile(data) {
    this.updateAttributes(data);
    this.urlBase = '/api/profiles'
  }

  BaseModel.parentOf(Profile);

  Profile.prototype.updateAttributes = function(data) {
    BaseModel.prototype.updateAttributes.call(this, data);
    if (!this.attributes.cover_letter_template) {
      this.attributes.cover_letter_template = ""
    }
    this.updatePreview();
  }


  Profile.prototype.updatePreview = function() {

    this.html = $sce.trustAsHtml(this.attributes.cover_letter_template);
  }

  return Profile;
}])
