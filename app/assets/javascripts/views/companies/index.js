JobHelper.Views.CompaniesIndex = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(this.collection, "sync add", this.render);
  },

  events: {

  },

  template: JST["companies/index"],

  render: function() {
     this.$el.html(this.template({
       companies: this.collection
     }));
     return this;
  },
})
