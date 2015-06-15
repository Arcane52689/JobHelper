

window.JobHelper = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    this.fetchData();
    $main = $("#main")
    this.baseRouter = new JobHelper.Routers.BaseRouter({
      $rootEl: $main
    });

    this.profileRouter = new JobHelper.Routers.ProfileRouter({
      $rootEl: $main
    });

    this.companyRouter = new JobHelper.Routers.CompaniesRouter({
      $rootEl: $main
    });

    this.coverLetterRouter = new JobHelper.Routers.CoverLettersRouter({
      $rootEl: $main
    });

    this.applicationsRouter = new JobHelper.Routers.ApplicationRouter({
      $rootEl: $main
    });

    this.attachStaticViews();

    Backbone.history.start();


  },

  fetchData: function() {
    this.currentUser = new JobHelper.Models.User();
    this.currentUser.fetch();

    this.companies = new JobHelper.Collections.Companies();
    this.companies.grabData();
  },


  attachStaticViews: function() {
    this.header = new JobHelper.Views.Header();
    $("#header").html(this.header.render().$el);
  }


};
//
// $(document).ready(function(){
//   JobHelper.initialize();
// });
