JobHelper.Views.CompanySearchBar = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.collection = new JobHelper.Collections.Companies();
  },

  events: {
    "change #search":"limit"
  },

  template: JST["companies/search_bar"],

  render: function() {
     this.$el.html(this.template({
       companies: this.collection
     }));
     return this;
  },

  limit: function(event) {
    event.preventDefault();
    this.collection.reset();
    debugger
    var substr = this.$("#search").val();
    var length = substr.length
    JobHelper.companies.each(function(company) {
      if (company.escape("name").toLowerCase().slice(0,length) == substr) {
        this.collection.add(company);
      }
    }.bind(this))

    this.renderCompanies();
  },

  renderCompanies: function() {
    this.$(".companies").empty();

  }
})
