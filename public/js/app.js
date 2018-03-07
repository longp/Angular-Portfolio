var app = angular.module('mainApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
      url: '/',
      templateUrl: '/partials/home.html'
    })
    // use the HTML5 History API
    $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});
