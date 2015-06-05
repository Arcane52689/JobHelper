JobHelper.Models.User = Backbone.Model.extend({
  url: "api/users/show",


  profile: function() {
    if (!this._profile) {
      this._profile = new JobHelper.Models.Profile() ;
    }
    return this._profile;
  },

  parse: function(response) {
    if (response.profile) {
      this.profile().set(response.profile);
    }
    delete response.profile;
    return response;
  }



  })
