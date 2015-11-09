angular.module("AppTrackerControllers").controller('BlurbFormCtrl', ['$http','Blurb', 'Collections', 'MyFlash', function($http, Blurb, Collections, MyFlash) {
  this.setUp = function() {
    this.blurbs = Collections.Blurbs
    this.blurbs.fetch();

    this.newBlurb = new Blurb({});
    this.selected = this.newBlurb;
  }

  this.selectNew = function() {
    this.selected = this.newBlurb
  }

  this.selectBlurb = function(id) {
    this.selected = this.blurbs.find(id);
  }

  this.checkClass = function(id) {
    if (id === this.selected.id) {
      return 'selected-blurb';
    } else if ( !this.selected.id && id === 'new') {
      return 'selected-blurb';
    } else {
      return '';
    }
  }

  this.save = function() {
    var isNew = this.selected.isNew();
    this.selected.save({success: function(resp) {
      if (isNew) {
        MyFlash.success("Blurb successfully created");
        this.blurbs.add(this.selected);
        this.newBlurb = new Blurb({});
      } else {
        MyFlash.success("Blurb successfully updated");
      }
    }.bind(this),
    error: function(resp) {
      ;
      MyFlash.error(resp.errors)
    }
  });
  }


  this.setUp()
}])
