JobHelper.Routers.ProfileRouter = Bacbkone.Router.extend({
  initialize: function(options) {
    this.$rootEl=options.$rootEl
  },
  routes: {
    "profiles/new": "newProfile"
  },


  newProfile:function() {
    view = new JobHelper.Views.ProfileForm({
      model: new JobHelper.Models.Profile()
    })
    this.swapView(view);
  }

  swapView:function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    this.$rootEl.html(view.render.$el);
  }
})
