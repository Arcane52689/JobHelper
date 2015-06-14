JobHelper.Views.Header = Backbone.CompositeView.extend({
  initialize: function(options) {

  },

  tagName: "nav",

  className: "header-nav group",

  events: {

  },

  template: JST["static/header"],

  render: function() {
     this.$el.html(this.template({}));
     return this;
  },
})
