JobHelper.Views.CompanyShow = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {

  },

  template: JST["companies/show"],

  render: function() {
     this.$el.html(this.template({
       company: this.model
     }));
     return this;
  },
})
