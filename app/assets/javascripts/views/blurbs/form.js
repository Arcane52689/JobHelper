JobHelper.Views.BlurbForm = Backbone.View.extend({
  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render)
  },

  tagName: "form",

  className: "blurb-form",

  events: {
    "submit": "submit"
  },

  template: JST["blurbs/form"],

  render: function() {
     this.$el.html(this.template({
       blurb: this.model
     }));
     return this;
  },

  submit: function(event) {
    event.preventDefault();
    var data = this.$el.serializeJSON();
    this.model.save(data, {
      success: function() {
        this.close();
        JobHelper.currentUser.blurbs().add(this.model, {merge: true});
        Backbone.history.navigate("profiles/me", {trigger: true});
      }.bind(this)
    })
  },

  close: function() {

    this.remove();
  }
})
