JobHelper.Views.ProfileShow = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(JobHelper.currentUser, "sync", this.render)
  },

  events: {
    "click .show-blurbs ": "toggleBlurbs"
  },

  template: JST["profiles/show"],

  render: function() {
     this.$el.html(this.template({
       profile: this.model,
       blurbs: JobHelper.currentUser.blurbs()

     }));
     this.renderBlurbs();
     return this;
  },

  renderBlurbs: function() {
    if (this._blurbView) {
      this._blurbView.remove();
    }
    this._blurbView = new JobHelper.Views.MyBlurbs({
      collection: JobHelper.currentUser.blurbs()
    });
    this.addSubview(".blurbs-container", this._blurbView);
  },

  toggleBlurbs: function(event) {
    event.preventDefault();
    $(".blurbs-container").toggle("inactive");
  },


})
