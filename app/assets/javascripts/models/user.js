JobHelper.Models.User = Bacbkone.Model.extend({
  url: "api/users/show",


  profile: function() {
    if (!this._profile) {
      this._profile = JobHelper.Models.Profile() ;
    }
    return this._profile;
  },

  parse: function(response) {
    if (response.profile) {
      this.profile().set(response);
    }
    delete response.profile;
    return response;
  }



  })
