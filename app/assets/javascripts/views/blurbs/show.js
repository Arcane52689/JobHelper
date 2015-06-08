JobHelper.Views.Blurb.BlurbShow = Backbone.View.extend({
  initialize: function(options) {

  },

  events: {

  },

  template: JST["blurbs/show"],

  render: function() {
     this.$el.html(this.template({
       blurb: this.model
     }));
     return this;
  },
})
