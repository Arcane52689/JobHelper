JobHelper.PopUps = {
  newBlurb: function() {
    var view = new JobHelper.Views.BlurbForm({
      model: new JobHelper.Models.Blurb()
    });
    $("#main").append(view.render().$el);
  }
}
