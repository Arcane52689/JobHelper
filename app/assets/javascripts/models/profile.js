var AppTrackerModels = angular.module('AppTrackerModels');

AppTrackerModels.factory('Profile', [ 'ModelFactory', '$sce', function(ModelFactory, $sce) {
  function Profile(data) {
    this.updateAttributes(data);
    this.urlBase = '/api/profiles'
  }

  ModelFactory.inherits(Profile, ModelFactory.BaseModel);

  Profile.prototype.updateAttributes = function(data) {
    ModelFactory.BaseModel.prototype.updateAttributes.call(this, data);
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
