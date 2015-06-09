JobHelper.Views.MyBlurbs = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(this.collection, "add", this.render);
  },

  events: {
    "click .blurb": "showBlurb",
    "click .new-blurb": "newBlurb"
  },

  template: JST["blurbs/my_blurbs"],

  render: function() {
     this.$el.html(this.template({
       blurbs: this.collection
     }));
     return this;
  },

  showBlurb: function(event) {
    event.preventDefault();
    if (this._showView) {
      this._showView.remove();
    }
    var id = $(event.currentTarget).data("id");
    this.currentBlurb = this.collection.getOrFetch(id);
    this._showView = new JobHelper.Views.BlurbShow({
      model: this.currentBlurb,
      callback: this.editBlurb.bind(this)
    });
    this.addSubview("#blurb-show",this._showView);
  },


  newBlurb: function(event) {

    event.preventDefault();
    if (this._formView) {
      this._formView.remove();
    }
    this._formView = new JobHelper.Views.BlurbForm({
      model: new JobHelper.Models.Blurb()
    });
    this.addSubview("#blurb-form",this._formView);
  },

  editBlurb: function(event) {
    event.preventDefault();
    if (this._formView) {
      this._formView.remove();
    }
    this._formView = new JobHelper.Views.BlurbForm({
      model: this.currentBlurb
    });
    this.addSubview("#blurb-form",this._formView);
  }
})
