JobHelper.Models.Application = Backbone.Model.extend({
  urlRoot: "api/applications",

  companyName = function() {

    return JobHelper.companies.get(this.get('company_id')).get('name')
  }
})
