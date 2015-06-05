JobHelper.Models.User = Backbone.Model.extend({
  url: "api/users/show",


  profile: function() {
    if (!this._profile) {
      this._profile = new JobHelper.Models.Profile() ;
    }
    return this._profile;
  },

  blurbs: function() {
    if (!this._blurbs) {
      this._blurbs = new JobHelper.Collections.Blurbs();
    }
    return this._blurbs;
  }


  parse: function(response) {
    if (response.profile) {
      this.profile().set(response.profile);
    }
    delete response.profile;
    return response;
  }





  })
