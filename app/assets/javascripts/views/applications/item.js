JobHelper.Views.ApplicationItemView = Backbone.View.extend({
  initialize: function(options) {

  },

  classname: "app-item group",

  tagname: "li",

  template: JST['applications/item'],

  render: function() {
    var view = this.template({
      app: this.model
    });
    this.$el.html(view)
    return this.$el
  }

})
