JobHelper.Views.ApplicationForm = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(JobHelper.currentUser, "sync", this.render)
    this.listenTo(JobHelper.companies, "sync", this.render)
  },

  events: {

  },

  template: JST["applications/form"],

  render: function() {
     this.$el.html(this.template({
       user: JobHelper.currentUser,
       application: this.model,
       companies: JobHelper.companies
     }));
     return this;
  },
})
