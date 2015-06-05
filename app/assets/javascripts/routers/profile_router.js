JobHelper.Routers.ProfileRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl=options.$rootEl
  },
  routes: {
    "profiles/edit": "editProfile",
    "profiles/me": "myProfile",
    "profiles/:id": "showProfile"
  },


  editProfile:function() {
    view = new JobHelper.Views.ProfileForm({
      model: JobHelper.currentUser.profile()
    })
    debugger
    this.swapView(view);
  },

  showProfile: function(id) {

  },

  myProfile: function() {
    view = new JobHelper.Views.ProfileShow({
      model: JobHelper.currentUser.profile()
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
