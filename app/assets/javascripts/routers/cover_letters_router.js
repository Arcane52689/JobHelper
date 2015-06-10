JobHelper.Routers.CoverLettersRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl=options.$rootEl
  },
  routes: {
    "cover_letters/new/:id": "newCoverLetter",
    "cover_letters/new": "newCoverLetter"

  },

  newCoverLetter: function(id) {
    debugger
    var letter = new JobHelper.Models.CoverLetter();
    if (id) {
      letter.set("company_id", id);
    }
    var view = new JobHelper.Views.CoverLetterForm({
      model: letter
    })

    this.swapView(view);

  },


  swapView:function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
