angular.module('AppTrackerUtilities').factory('Selected', function() {
  var Selected = {
    'data' : {
      'company': undefined,
      'cover_letter': undefined,
      'application': undefined,
      'profile': undefined,
      'blurb': undefined
    }
  };
  Selected.add= function(key, model){
    this.data[key] = model;
  }

  return Selected;

})
