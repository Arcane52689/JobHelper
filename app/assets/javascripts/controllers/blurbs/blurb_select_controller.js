angular.module('AppTrackerControllers').controller('BlurbSelectCtrl', ['Collections', 'Selected', function(Collections, Selected) {
  this.setUp = function() {
    this.blurbs = Collections.Blurbs;
    this.blurbs.fetch();
    this.selected = Selected.data;
  }

  this.checkClass = function(id) {
    if (this.selected.blurb && (this.selected.blurb.id === id)) {
      return "selected-item"
    } else {
      return ""
    }
  }

  this.toggle = function() {

    this.selecting = true;
  }

  this.selectBlurb = function(id) {
    //need to combine these and add a confirmation that this will reset the text
    this.selected.blurb = this.blurbs.find(id);
    this.selecting = false;
  }

  this.setUp();


}])
