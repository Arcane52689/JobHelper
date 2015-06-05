JobHelper.Views.ProfileForm = Backbone.View.extend({
  initialize: function(options) {
    this.listenTo(JobHelper.currentUser,"sync",this.render)
  },

  className: "profile-form",

  tagName: "form",

  events: {
    "submit": "submit"
  },

  template: JST["profiles/form"],

  render: function() {
     this.$el.html(this.template({
       profile: this.model
     }));
     return this;
  },



  submit: function(event) {
    event.preventDefault();
    var template = this.$("#template").html()
    this.model.set("cover_letter_template", template);
    this.model.save({}, {
      success: function() {
        Backbone.history.navigate("", {trigger: true})
      }
    })

  },

})
