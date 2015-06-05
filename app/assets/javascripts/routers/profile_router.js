JobHelper.Routers.ProfileRouter = Bacbkone.Router.extend({
  initialize: function(options) {
    this.$rootEl=options.$rootEl
  },
  routes: {
    "profiles/new": "newProfile",
    "my_profile": "showProfile"
  },


  newProfile:function() {
    view = new JobHelper.Views.ProfileForm({
      model: new JobHelper.Models.Profile()
    })
    this.swapView(view);
  },

  showProfile: function() {
    
  }

  swapView:function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    this.$rootEl.html(view.render.$el);
  }
})
