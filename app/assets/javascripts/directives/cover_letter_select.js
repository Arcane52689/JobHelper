angular.module('AppTrackerDirectives').directive('coverLetterSelect', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'cover_letters/cover_letter_select.html',
    controller: 'CoverLetterSelectCtrl',
    controllerAs: 'coverLetterSelect'

  }
})
