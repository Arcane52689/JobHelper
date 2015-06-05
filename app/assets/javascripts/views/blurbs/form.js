JobHelper.Views.BlurbForm = Backbone.View.extend({
  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render)
  },

  tagName: "form",

  events: {
    "submit"
  },

  template: JST["blurbs/form"],

  render: function() {
     this.$el.html(this.template({}));
     return this;
  },

  submit: function() {
    var data = this.$el.serializeJSON();
    this.model.save(data, {
      success: function() {
        this.close();
        JobHelper.currentUser.blurbs().add(this.model, {merge: true});
        Backbone.history.navigate("profiles/me", {trigger: true})
      }
    })
  }
})
