angular.module('AppTrackerControllers').controller('CoverLettersCtrl', [ '$routeParams', '$location', 'Collections', 'MyFlash', function($routeParams, $location, Collections, MyFlash) {
  this.setUp = function() {
    this.coverLetters = Collections.CoverLetters;
    this.coverLetters.fetch(
      {
        success: function() {
          if ($routeParams['id']) {
            this.coverLetter = this.coverLetters.find($routeParams['id']);
          } else {
            this.coverLetter = undefined;
          }
        }.bind(this)
      }
    );

  }

  this.generatePDF = function() {

    this.coverLetter.generatePDF({success:function() {

        MyFlash.success("PDF successfully created")
      }.bind(this),
      error: function(resp) {
        MyFlash.error(resp.errors);
      }
    })
  }

  this.canGeneratePDF = function() {
    if (!this.coverLetter) {
      return false;
    }
    if (this.coverLetter.get('download_url')) {
      return false;
    } else {
      return true;
    }
  }




  this.setUp();
}])
