JobHelper.Routers.CoverLettersRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl=options.$rootEl
  },
  routes: {
    "cover_letters": "index",
    "cover_letters/new/:id": "newCoverLetter",
    "cover_letters/new": "newCoverLetter",
    "cover_letters/:id": "showCoverLetter"

  },

  newCoverLetter: function(id) {
    var letter = new JobHelper.Models.CoverLetter();
    if (id) {
      letter.set("company_id", id);
    }
    var view = new JobHelper.Views.CoverLetterForm({
      model: letter
    })

    this.swapView(view);

  },

  showCoverLetter: function(id) {
    var letter = new JobHelper.Models.CoverLetter({id: id});
    letter.fetch();
    var view = new JobHelper.Views.CoverLetterShow({
      model: letter
    })
    this.swapView(view);
  },

  index: function() {
    var view = new JobHelper.Views.CoverLetterIndex({
      collection: JobHelper.currentUser.coverLetters()
    });
    this.swapView(view)
  },


  swapView:function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
