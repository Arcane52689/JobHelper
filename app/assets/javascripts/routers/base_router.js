JobHelper.Routers.BaseRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl=options.$rootEl
  },
  routes: {
     "": "root"
  },


  root: function() {

    view = new JobHelper.Views.RootView();
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
