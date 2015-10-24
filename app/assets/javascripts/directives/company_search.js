angular.module('AppTrackerDirectives').directive('companySearch', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'companies/company_search.html',
    controller: 'CompanySearchCtrl',
    controllerAs: 'search'
  };
});
