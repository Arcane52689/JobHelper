JobHelper.Collections.Companies = Backbone.Collection.extend({
  initialize: function() {
    this.searchData = {
      page: 1,
      name: ""
    }
  },

  url: "api/companies",
  model: JobHelper.Models.Company,

  getOrFetch: function(id) {
    var model = this.get(id);
    if (!model) {
      model = new this.model({id: id});
    }
    model.fetch();
    return model;
  },

  grabData: function() {
    this.fetch({data: this.searchData })
  },



  nextPage: function() {
    if (this.total_pages > this.searchData.page) {
      this.searchData.page += 1;
      this.grabData();
    }
  },

  prevPage: function() {
    if (this.searchData.page > 1) {
      this.searchData.page -= 1;
      this.grabData();
    }
  }
})
