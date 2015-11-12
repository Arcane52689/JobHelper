angular.module('AppTrackerControllers').controller('ApplicationChartsCtrl', ['$http', '$rootScope', function($http, $rootScope) {
  this.setUp = function() {
    $http.get('./api/applications/statistics').success(function(resp) {
      this.setUpStatistics(resp);
    }.bind(this)
    )
  }


  this.setUpStatistics = function(stats) {

    this.percentages = {
      rejected: Math.floor(stats.rejected / stats.total * 10000) / 100,
      phone_screened: Math.floor(stats.phone_screened / stats.total * 10000) / 100,
      on_site: Math.floor(stats.on_site / stats.total * 10000) / 100
    }

    this.rejected = {
      'key': 'rejected',
      'value': stats.rejected,
      'color': 'white'
    };
    this.on_site = {
      'key': 'on_site',
      'value': stats.on_site,
      'color': 'blue'
    };
    this.phone_screened = {
      'key': 'phone_screened',
      'value': stats.phone_screened,
      'color': 'green'
    };
    this.total = stats.total;
    this.setUpCharts();
  }

  this.setUpCharts = function() {
    this.rejectedChart = new ChartUtility.PieChart( {
      canvasId: 'rejected',
      objs: [this.rejected],
      total: this.total,
      default: 'red',
      hideLegend: true,
      radius: 125

    });
    this.onSiteChart = new ChartUtility.PieChart( {
      canvasId: 'on_site',
      objs: [this.on_site],
      total: this.total,
      default: 'red',
      hideLegend: true,
      radius: 125

    });
    this.phoneScreenedChart = new ChartUtility.PieChart( {
      canvasId: 'phone_screened',
      objs: [this.phone_screened],
      total: this.total,
      default: 'red',
      hideLegend: true,
      radius:125
    });

    this.draw();

  }

  this.draw = function() {
    this.rejectedChart.execute();
    this.onSiteChart.execute();
    this.phoneScreenedChart.execute();
  }


  this.setUp();
  $rootScope.$on('updateEvent', this.setUp.bind(this));
}])
