JobHelper.Routers.CompaniesRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl=options.$rootEl
  },
  routes: {
    "companies/new": "newCompany",
    "companies": "companiesIndex"
  },

  companiesIndex: function() {
    var view = new JobHelper.Views.CompaniesIndex({
      collection: JobHelper.companies
    });
    this.swapView(view);
  },

  newCompany: function() {
    var view = new JobHelper.Views.CompanyForm({
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
