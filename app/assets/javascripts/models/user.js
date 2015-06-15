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
  },

  coverLetters: function() {
    if (!this._coverLetters) {
      this._coverLetters = new JobHelper.Collections.CoverLetters();
    }
    return this._coverLetters;
  },

  applications: function() {
    if (!this._applications) {
      this._applications = new JobHelper.Collections.Applications();
    }
    return this._applications;
  },


  parse: function(response) {
    if (response.profile) {
      this.profile().set(response.profile);
      delete response.profile;
    }
    if (response.blurbs) {

      this.blurbs().set(response.blurbs);
      delete response.blurbs;
    }

    if (response.cover_letters) {
      this.coverLetters().set(response.cover_letters);
      delete response.cover_letters;
    }

    if (response.applications) {
      this.applications().set(response.applications);
      delete response.applications;
    }

    return response;
  }





  })
