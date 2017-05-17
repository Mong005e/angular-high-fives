var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/ironfist', {
     templateUrl: 'views/pages/ironfist.html',
     controller: 'ifController',
     controllerAs: 'ifc'
  }).when('/punisher', {
     templateUrl: 'views/pages/punisher.html',
     controller: 'PunisherController',
     controllerAs: 'pc'
   }).when('/daredevil', {
      templateUrl: 'views/pages/dd.html',
      controller: 'ddController',
      controllerAs: 'dc'
    }).otherwise({
      template: '<h2>That is a 404!</h2>'
    })
}]);
//
// $locationProvider.html5Mode(true);
