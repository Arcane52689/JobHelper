JobHelper.Views.ProfileShow = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(JobHelper.currentUser, "sync", this.render)
  },

  events: {
    "click .new-blurb": "newBlurb"
  },

  template: JST["profiles/show"],

  render: function() {
     this.$el.html(this.template({
       profile: this.model,
       blurbs: JobHelper.currentUser.blurbs()

     }));
     return this;
  },

  newBlurb: function(event) {
    event.preventDefault();
    JobHelper.PopUps.newBlurb();
  }
})
