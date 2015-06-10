JobHelper.Views.CoverLetterForm = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(JobHelper.companies,"sync", this.render);
    this.listenTo(JobHelper.currentUser, "sync",this.render);
    this.listenTo(JobHelper.companies, "sync",this.wtf);

  },

  events: {
    "submit": "submit",
    "change #companies": "changeCompany",
    "change #blurbs": "changeBlurb"
  },

  tagName: "form",

  className: "inner-modal",

  template: JST["cover_letters/form"],

  render: function() {
     this.$el.html(this.template({
       letter: this.model,
       companies: JobHelper.companies,
       blurbs: JobHelper.currentUser.blurbs()
     }));
     return this;
  },

  submit: function(event) {
    event.preventDefault();
    var data = this.$el.serializeJSON();
    data.cover_letter.profile_id = JobHelper.currentUser.profile().get('id')
    var text = this.$("#preview").html();
    data.cover_letter.body = text;
    this.model.save(data, {
      success: function() {
        JobHelper.currentUser.coverLetters().add(this.model, {merge: true});
        Backbone.history.navigate("cover_letters/"+this.model.get("id"), {trigger: true});
      }.bind(this)
    })
  },

  changeCompany: function(event){
    event.preventDefault();
    var newId = $(event.currentTarget).val();
    this.model.set("company_id",newId);
    this.preview()
  },

  changeBlurb: function(event) {
    event.preventDefault();
    var newId = $(event.currentTarget).val();
    this.model.set("blurb_id", newId);
    this.preview();
  },

  preview: function() {
    if ((!this.model.get("company_id")) || (!this.model.get("blurb_id"))) {
      return
    }
    var text = JobHelper.currentUser.profile().get("cover_letter_template")

    var blurb = JobHelper.currentUser.blurbs().getOrFetch(this.model.get("blurb_id"));
    text =text.replace(/\[blurb\]/gi, blurb.get("body"));

    var company = JobHelper.companies.get(this.model.get("company_id"))
    text = text.replace(/\[company name\]/gi, company.get("name"));

    this.model.set("body",text);
    this.$("#preview").html(text);


  },

  wtf: function() {
    console.log("Why is companies syncing?")
  }

})
