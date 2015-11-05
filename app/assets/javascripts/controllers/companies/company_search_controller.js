angular.module('AppTrackerControllers').controller('CompanySearchCtrl', ['Collections', 'Selected', 'Company', 'MyFlash', function(Collections, Selected, Company, MyFlash) {
  this.setUp = function() {
    this.companies = Collections.Companies;
    this.companies.fetch();
    this.displayedCompanies = [];
    this.name = "";
    this.selected = Selected.data;
    if (this.selected.company) {
      this.searchName = this.selected.company.get('name');
    }
  }

  this.filterCompanies = function() {
    this.selecting = true;
    if (this.name){
      var lowercase = this.name.toLowerCase();
      this.displayedCompanies = this.companies.where(function(m) {
        return (m.get('name').toLowerCase().indexOf(lowercase) > -1);
      }.bind(this)).first(10);
    } else {
      this.displayedCompanies = [];
    }
  }

  this.selectCompany = function(id) {
    this.selected.company = this.companies.find(id);
    this.name = '';
    this.selecting = false;

  }

  this.createCompany = function() {
    var company = new Company({name: this.name});
    company.save({
      success: function(resp) {
        this.companies.add(company);
        this.selected.company = company;
        MyFlash.success(company.get('name') + 'successfully created')
      }.bind(this), 
      error: function(resp) {
        MyFlash.error(resp.errors)
      }
    })
  }

  this.setUp();
}])
