angular.module('AppTrackerControllers').controller('CoverLetterFormCtrl', ['$sce', 'CoverLetter', 'Collections', '$routeParams', function($sce, CoverLetter, Collections, $routeParams) {
  this.setUp = function() {
    this.date = new Date();

    this.profiles = Collections.Profiles;
    this.profiles.fetch();
    this.companies = Collections.Companies;
    this.companies.fetch();
    this.blurbs = Collections.Blurbs;
    this.blurbs.fetch();
    this.selecting = {
      'profiles': false,
      'companies': false,
      'blurbs': false
    }
    this.displayedCompanies = [];

    if ($routeParams['id']){
      this.setUpEdit($routeParams['id']);
    } else {
      this.setUpNew();
    }
  }

  this.setUpNew = function(){
    this.searchName = "";
    this.coverLetter = new CoverLetter({});
    this.selected = {}
  }

  this.setUpEdit = function(id) {
    this.coverLetter = new CoverLetter({ 'id': id});
    this.coverLetter.fetch({success: function(resp) {
      this.selected.profile = this.profiles.find(this.coverLetter.get('profile_id'));
      this.selected.blurb = this.blurbs.find(this.coverLetter.get('blurb_id'));
      this.selected.company = this.companies.find(this.coverLetter.get('company_id'));
    }})
  }


  this.filterCompanies = function() {
    this.selecting.companies = true;
    if (this.searchName){
      var lowercase = this.searchName.toLowerCase();
      this.displayedCompanies = this.companies.where(function(m) {
        return (m.get('name').toLowerCase().indexOf(lowercase) > -1);
      }.bind(this)).first(10);
    } else {
      this.displayedCompanies = [];
    }
  }

  this.selectCompany = function(id) {
    this.selected.company = this.companies.find(id);
    this.searchName = this.selected.company.get('name');
    this.selecting.companies = false;

  }

  this.toggle = function(key) {
    this.selecting[key] = true;
  }

  this.selectProfile = function(id) {
    this.selected.profile = this.profiles.find(id);
    this.selecting.profiles = false;
  }

  this.selectBlurb = function(id) {
    //need to combine these and add a confirmation that this will reset the text
    this.selected.blurb = this.blurbs.find(id);
    this.selecting.blurbs = false;
  }

  this.stopSelecting = function() {
    this.selecting.profiles = false;
    this.selecting.companies = false;
    this.selecting.blurbs = false;
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



  this.setUp()
}])
