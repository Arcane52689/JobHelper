

window.JobHelper = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    this.currentUser = new JobHelper.Models.User();
    this.currentUser.fetch();

    this.baseRouter = new JobHelper.Routers.BaseRouter({
      $rootEl: $("#main")
    });

    this.profileRouter = new JobHelper.Routers.ProfileRouter({
      $rootEl: $("#main")
    })
    Backbone.history.start();


  },

};
//
// $(document).ready(function(){
//   JobHelper.initialize();
// });
