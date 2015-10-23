angular.module('AppTrackerControllers').controller('CoverLettersCtrl', [ '$routeParams', '$location', 'Collections', function($routeParams, $location, Collections) {
  this.setUp = function() {
    this.coverLetters = Collections.CoverLetters;
    this.coverLetters.fetch();
  }


  this.setUp();
}])
