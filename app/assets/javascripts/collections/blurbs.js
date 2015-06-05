JobHelper.Collections.Blurbs = Backbone.Collection.extend({
  url: "api/blurbs",
  model: JobHelper.Models.Blurb,

  getOrFetch: function(id) {
    var model = this.get(id);
    if (!model) {
      model = new this.model({id: id});
    }
    model.fetch();
    return model;
  }
})
