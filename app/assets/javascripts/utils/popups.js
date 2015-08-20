JobHelper.PopUps = {
  newBlurb: function() {
    var view = new JobHelper.Views.BlurbForm({
      model: new JobHelper.Models.Blurb()
    });
    $("#main").append(view.render().$el);
  },

  addCompany: function(options) {
    var company = new JobHelper.Models.Company({name: options.name});
    debugger
    var view = new JobHelper.Views.CompanyForm({
      model: company,
      modal: true,
      callback: options.callback
    });
    $("#popup").toggle("inactive").html(view.render().$el);
  }

}
