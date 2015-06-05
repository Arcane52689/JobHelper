JobHelper.Views.ProfileShow = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(JobHelper.currentUser, "sync", this.render)
  },

  events: {

  },

  template: JST["profiles/show"],

  render: function() {
     this.$el.html(this.template({ profile: this.model }));
     return this;
  },
})
