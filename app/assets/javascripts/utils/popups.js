JobHelper.PopUps = {
  newBlurb: function() {
    var view = new JobHelper.Views.BlurbForm({
      model: new JobHelper.Models.Blurb()
    });
    $("#main").append(view.render().$el);
  },

  addCompany: function(name, callback) {
    var company = new JobHelper.Models.company({name: name});
    var view = new JobHelper.Views.CompanyForm({
      model: company,
      modal: true,
      callback: callback
    });
    $("#popup").toggle("inactive").html(view.render().$el);
  }

}
