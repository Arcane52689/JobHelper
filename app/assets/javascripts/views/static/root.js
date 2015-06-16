JobHelper.Views.RootView = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(JobHelper.currentUser, "sync", this.render)
  },

  events: {

  },

  template: JST["static/root"],

  render: function() {
     this.$el.html(this.template({ user: JobHelper.currentUser }));
     this.search = new JobHelper.Views.CompanySearchBar();
     this.addSubview(".box", this.search);
     return this;
  },
})
