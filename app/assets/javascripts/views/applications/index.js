JobHelper.Views.ApplicationsIndex = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(this.collection, "sync add", this.render)
  },

  events: {

  },

  template: JST["applications/index"],

  render: function() {
     this.$el.html(this.template({
       applications: this.collection
     }));
     return this;
  },
})
