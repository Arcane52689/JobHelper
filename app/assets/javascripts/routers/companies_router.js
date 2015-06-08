JobHelper.Routers.CompaniesRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl=options.$rootEl
  },
  routes: {
    "companies/new": "newCompany",
    "companies": "CompaniesIndex"
  },

  companiesIndex: function() {

  },

  newCompany: function() {
    view = new JobHelper.Views.CompanyForm({
      model: new JobHelper.Models.Company()
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
