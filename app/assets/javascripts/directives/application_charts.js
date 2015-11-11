angular.module('AppTrackerDirectives').directive('applicationCharts', function(){ return {
  replace: true,
  restrict: 'E',
  templateUrl: 'applications/charts.html',
  controller: 'ApplicationChartsCtrl',
  controllerAs: 'charts'
}})
