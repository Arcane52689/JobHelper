JobHelper.Views.CompanyItem = Backbone.View.extend({
  initialize: function(options) {

  },

  events: {

  },

  tagName: "li",

  className: "search-item",

  template: JST["companies/item"],

  render: function() {
     this.$el.html(this.template({
       company:this.model
     }));
     this.$el.data("id",this.model.id +'')
     return this;
  },
})
