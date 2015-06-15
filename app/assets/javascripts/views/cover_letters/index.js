JobHelper.Views.CoverLetterIndex = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(JobHelper.currentUser, "sync", this.render);
  },

  events: {

  },

  template: JST["cover_letters/index"],

  render: function() {
     this.$el.html(this.template({
       letters: this.collection
     }));
     return this;
  },
})
