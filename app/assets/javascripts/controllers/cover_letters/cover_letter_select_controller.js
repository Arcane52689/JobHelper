angular.module('AppTrackerControllers').controller('CoverLetterSelectCtrl', ['Collections', 'Selected', function(Collections, Selected) {

  this.setUp = function() {
    this.coverLetters = Collections.CoverLetters;
    this.coverLetters.fetch();
    this.selected = Selected.data;
  }

  this.checkClass = function(id) {
    if (this.selected.coverLetter && (this.selected.coverLetter.id === id)) {
      return "selected-item"
    } else {
      return ""
    }
  }

  this.toggle = function() {
    this.selecting = true;
  }

  this.selectCoverLetter = function(id) {
    this.selected.cover_letter = this.coverLetters.find(id);
    this.selecting = false;
  }


  this.setUp();

}])
