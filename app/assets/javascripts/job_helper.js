

window.JobHelper = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  defineRouters: function() {

  },


  initialize: function() {

    this.baseRouter = new JobHelper.Routers.BaseRouter({
      $rootEl: $("#main")
    });

    this.profileRouter = new JobHelper.Routers.ProfileRouter({
      $rootEl: $("#main")
    })
    this.currentUser = new JobHelper.Models.User();
    this.currentUser.fetch();
    this.defineRouters();

    Backbone.history.start();


  },

};

$(document).ready(function(){
  JobHelper.initialize();
});
