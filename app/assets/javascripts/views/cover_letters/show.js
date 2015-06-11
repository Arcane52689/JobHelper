JobHelper.Views.CoverLetterShow = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(this.model,"sync", this.render)
  },

  events: {

  },

  template: JST["cover_letters/show"],

  render: function() {

    this.$el.html(this.template({
      letter: this.model
    }));
    return this;
  },
})
