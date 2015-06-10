JobHelper.Views.CoverLetterForm = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render)
  },

  events: {
    "submit": "submit"
  },

  tagName: "form",

  className: "inner-modal",

  template: JST["cover_letter/form"],

  render: function() {
     this.$el.html(this.template({
       letter: this.model
     }));
     return this;
  },

  submit: function(event) {
    event.preventDefault();
    var data = this.$el.serializeJSON();
    this.model.save(data, {
      success: function() {
        JobHelper.currentUser.coverLetters.add(this.model, {merge: true});
        Backbone.history.navigate("cover_letters/"+this.model.id, {trigger: true});
      }
    })
  }

})
