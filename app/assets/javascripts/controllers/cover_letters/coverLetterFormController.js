angular.module('AppTrackerControllers').controller('CoverLetterFormCtrl', ['$sce', 'CoverLetter', 'Collections', '$routeParams', '$location', 'Selected', function($sce, CoverLetter, Collections, $routeParams, $location, Selected) {
  this.setUp = function() {
    this.date = new Date();

    this.profiles = Collections.Profiles;
    this.profiles.fetch();
    this.companies = Collections.Companies;
    this.companies.fetch();
    this.blurbs = Collections.Blurbs;
    this.blurbs.fetch();
    this.selected = Selected.data;

    this.selecting = {
      'profiles': false,
      'blurbs': false
    }
    if ($routeParams['id']){
      this.setUpEdit($routeParams['id']);
    } else {
      this.setUpNew();
    }
  }

  this.setUpNew = function(){
    this.searchName = "";
    this.coverLetter = new CoverLetter({});

  }

  this.setUpEdit = function(id) {
    this.coverLetter = new CoverLetter({ 'id': id});
    this.coverLetter.fetch({success: function(resp) {
      this.selected.profile = this.profiles.find(this.coverLetter.get('profile_id'));
      this.selected.blurb = this.blurbs.find(this.coverLetter.get('blurb_id'));
      this.selected.company = this.companies.find(this.coverLetter.get('company_id'));

      this.coverLetter.trustBody();
      this.preview = this.coverLetter.html;
    }.bind(this)})
  }






  this.allSelected = function() {
    return ((this.selected.blurb && this.selected.profile) && this.selected.company)
  }

  this.updatePreview = function() {

    var company_name = this.selected.company.get('name');
    var blurbText = this.selected.blurb.get('body');
    var template = this.selected.profile.get('cover_letter_template');
    template = template.replace('[blurb]', blurbText).replace('[company]',company_name).replace('[date]', this.dateInWords());
    this.preview = $sce.trustAsHtml(template);
  }

  this.dateInWords = function() {
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'Decemeber'
    ];
    string = months[this.date.getMonth()] + " " + this.date.getDate() + ", " + this.date.getFullYear();
    return string;
  }

  this.save = function() {
    if (!this.allSelected()) {
      return ;
    }
    this.coverLetter.set('profile_id', this.selected.profile.id);
    this.coverLetter.set('company_id', this.selected.company.id);
    this.coverLetter.set('blurb_id', this.selected.blurb.id);
    var text = $('.cover-letter-form').html();
    this.coverLetter.set('body', text);
    this.coverLetter.save({
      success: function(resp) {
        $location.path("/cover_letters/"+this.coverLetter.id);
      }.bind(this)
    });
  }



  this.setUp()
}])
