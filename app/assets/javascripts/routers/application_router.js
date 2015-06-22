JobHelper.Routers.ApplicationRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl=options.$rootEl
  },
  routes: {
    "applications": "index",
    "applications/new":"newApp"

  },

  index: function() {
    var view = new JobHelper.Views.ApplicationsIndex({
      collection: JobHelper.currentUser.applications()
    });
    this.swapView(view);
  },


  newApp: function() {
    var view = new JobHelper.Views.ApplicationForm({
      model: new JobHelper.Models.Application(),
      collection: JobHelper.currentUser.applications()
    });
    this.swapView(view);
  },

  swapView:function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
