JobHelper.Views.CompanySearchBar = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.collection = new JobHelper.Collections.Companies();
  },

  events: {
    "keyup #search":"limit",
    "paste #search":"limit",
    "click #create": "addCompany"
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

    var substr = this.$("#search").val();
    var length = substr.length
    if (length > 0) {

      JobHelper.companies.each(function(company) {
        if (company.escape("name").toLowerCase().slice(0,length) == substr) {
          this.collection.add(company);
        }
      }.bind(this))
    }

    this.renderCompanies();
  },

  renderCompanies: function() {
    var view
    this.emptyCompanies();
    this.collection.each(function(company){
      view = new JobHelper.Views.CompanyItem({
        model: company
      });
      this.addSubview(".companies",view)
    }.bind(this))

    if (this.$('#search').val().length > 2) {
      this.$(".companies").append('<button id="create"> Add Company </button>')
    }
  },

  emptyCompanies: function() {

    _.each(this.subviews(".companies")._wrapped, function(view) {

      this.removeSubview(".companies", view);
    }.bind(this));
    this.$('.companies').empty();
  },

  addCompany: function(event) {
    event.preventDefault();



  }


})
