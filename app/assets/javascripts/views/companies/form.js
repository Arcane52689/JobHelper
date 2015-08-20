JobHelper.Views.CompanyForm = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(this.model,"sync",this.render);
    if (options) {

      this.modal = options.modal
      this.callback = options.callback
    }
  },

  events: {
    "submit":"submit"
  },

  tagName: 'form',

  template: JST["companies/form"],

  render: function() {
     this.$el.html(this.template({
       company: this.model
     }));
     return this;
  },

  submit: function(event) {

    event.preventDefault();
    var data = this.$el.serializeJSON();
    this.model.save(data, {
      success: function() {
        JobHelper.companies.add(this.model);
        if (this.modal) {
          this.close();
          this.callback && this.callback(this.model);
        }
        else{
          Backbone.history.navigate("companies/"+this.model.get("id"), {trigger: true});

        }
      }.bind(this)
    })
  },

  close: function(event) {
    event && event.preventDefault();
    this.remove();
    $("#popup").toggle("inactive");
  }
})
