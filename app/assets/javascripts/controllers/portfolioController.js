var Controllers = angular.module('AppTrackerControllers');

Controllers.controller('PortfolioCtrl', ['$http', '$sce', function($http, $sce) {
  $http.get('/api/profiles').success(function(res) {
    this.profiles = res
    this.profile = this.profiles[0]
    this.cover_letter_template = $sce.trustAsHtml(this.profile.cover_letter_template)
  }.bind(this));
}])
