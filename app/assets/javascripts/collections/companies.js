JobHelper.Collections.Companies = Backbone.Collection.extend({
  url: "api/collections",
  model: JobHelper.Models.Company,

  getOrFetch: function(id) {
    var model = this.get(id);
    if (!model) {
      model = new this.model({id: id});
    }
    model.fetch();
    return model;
  }
})
