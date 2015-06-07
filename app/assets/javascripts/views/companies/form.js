JobHelper.Views.CompanyForm = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(this.model,"sync",this.render);
  },

  events: {
    "submit":"submit"
  },

  template: JST["companies/form"],

  render: function() {
     this.$el.html(this.template({
       company: this.model
     }));
     return this;
  },

  sumbit: function(event) {
    event.preventDefault();
    var data = this.$el.serializeJSON();
    this.save(data, {
      success: function() {
        JobHelper.companies.add(this.model);
        Backbone.history.navigate("companies/"+this.model.get(id), {trigger: true});
      }.bind(this)
    })
  }
})
