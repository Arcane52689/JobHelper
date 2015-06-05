JobHelper.Views.ProfileForm = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(this.model,"sync",this.render)
  },

  className: "profile-form",

  tagName: "form",

  events: {
    "submit": "submit"
  },

  template: JST["profiles/form"]

  render: function() {
     this.$el.html(this.template({}));
     return this.$el;
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
