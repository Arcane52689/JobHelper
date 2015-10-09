JobHelper.Views.BlurbShow = Backbone.View.extend({
  initialize: function(options) {
    this.callback = options.callback
  },

  events: {
    "click .edit-blurb": "editBlurb"
  },

  template: JST["blurbs/show"],

  render: function() {
     this.$el.html(this.template({
       blurb: this.model
     }));
     return this;
  },

  editBlurb: function(event) {
    event.preventDefault()
    this.callback(event);
  }
})
