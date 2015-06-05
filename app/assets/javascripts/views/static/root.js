JobHelper.Views.RootView = Backbone.View.extend({
  initialize: function(options) {
    this.listenTo(JobHelper.currentUser, "sync", this.render)
  },

  events: {

  },

  template: JST["static/root"],

  render: function() {
     this.$el.html(this.template({ user: JobHelper.currentUser }));
     return this;
  },
})
