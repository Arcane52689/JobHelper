JobHelper.Views.MyBlurbs = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(this.collection, "change", this.render);
  },

  events: {
    "click .blurb", "showBlurb"
  },

  template: JST["blurbs/my_blurbs"],

  render: function() {
     this.$el.html(this.template({
       blurbs: JobHelper.currentUser.blurbs()
     }));
     return this;
  },

  showBlurb: function(event) {
    event.preventDefault();
    if (this._showView) {
      this._showView.remove();
    }
    var id = $(event.currentTarget).data("id");
    this._showView = new JobHelper.Views.BlurbShow({
      model: this.collection.getOrFetch(id)
    });
    this.addSubview("#blurb-show",this._showView);
  }
})
