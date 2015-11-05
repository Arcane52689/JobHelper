var AppTrackerControllers = angular.module("AppTrackerControllers")

AppTrackerControllers.controller("CompaniesCtrl", ['$http', 'BaseCollection','Company', 'MyFlash', function($http, BaseCollection, Company, MyFlash) {

  this.updateDisplayedCompanies = function() {
    this.displayedCompanies = this.companies.where(function(model) {
     var name = model.get('name').toLowerCase();
     var search = this.searchName.toLowerCase();
     return ( -1 < name.indexOf(search));
   }.bind(this))
  };



  this.updatePage = function() {
    this.updateDisplayedCompanies();
    var startIndex = (this.page - 1) * this.perPage;
    this.shown = this.displayedCompanies.all().slice(startIndex, startIndex + this.perPage)
  }

  this.updateCompanies = function() {
    this.page = 1;
    this.updatePage();
  }

  this.addCompany = function() {
    var newComp = new Company();
    newComp.set('name',this.searchName);
    newComp.save({success: function(resp) {
      MyFlash.success(newComp.get('name') + ' has successfully been created')
      this.companies.add(newComp);
      this.searchName = "";
      this.updatePage();
    }.bind(this),
  error: function(resp) {
    MyFlash.error(resp.errors)
  }})
  }

  this.pages = function() {
    if (!this.displayedCompanies) {
      return 1;
    }
    return Math.floor(this.displayedCompanies.all().length / this.perPage) + 1;
  }

  this.hasNext = function() {
    return (this.page < this.pages())
  }
  this.nextPage = function() {
    if (this.hasNext()) {
      this.page += 1
      this.updatePage();
    }
  }
  this.hasPrev = function() {
    return (this.page > 1)
  }

  this.prevPage = function() {
    if (this.hasPrev()){
      this.page -= 1;
      this.updatePage();
    }
  }



  this.goToPage = function(page) {
    if ((page > 0) && (page <= this.pages())) {
      this.page = page;
      this.updatePage();
    }
  }

  this.nearPages = function() {
    var min, max, result
    min = (this.page < 3) ? 1 : this.page - 2;
    max = (this.page > this.pages() - 2) ? this.pages() : this.page + 2;
    result = [];
    for (var i = min; i <= max; i++) {
      result.push(i);
    }
    return result;

  }


  this.confirm = function(callback) {
    this.callback = callback.bind(this);
    this.confirmation = true;
  }

  this.yes = function() {
    this.callback && this.callback()
    this.confirmation = false;
    this.callback = undefined;
  }
  this.no = function() {{
    this.callback = undefined;
    this.confrimation = false;
  }}

  this.searchName = "";
  this.page = 1;
  this.perPage = 5;
  this.orderByAttribute = 'name';
  this.reverse = false;

  this.companies = new BaseCollection({
    model: Company,
    url: 'api/companies',
    comparator: 'name'
  });

  this.companies.fetch({success: function() {
    this.companies.sort();
    this.updatePage();
  }.bind(this)
});






}])
