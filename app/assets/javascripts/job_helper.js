window.JobHelper = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JobHelper.initialize();
});
