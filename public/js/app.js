var app = angular.module('mainApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
      url: '/',
      templateUrl: '/partials/home.html'

    })
    .state('about', {
      url: '/about',
      templateUrl: '/partials/about.html'
    })
    .state('projects', {
      url: '/projects',
      templateUrl: '/partials/projects.html'
    })
    .state('galaxy', {
      url: '/galaxy',
      templateUrl: '/partials/galaxy.html'
    })
    .state('pokemon', {
      url: '/pokemon',
      templateUrl: '/partials/pokemon.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: '/partials/contact.html'
    })


    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});

app.directive('backImg', function(){
  return function(scope, element, attr){
    var backgroundArr = [
      'url("http://i.imgur.com/NNoFNWf.png")',
      'url("http://i.imgur.com/VW2DYbL.png")',
      'url("http://i.imgur.com/UZKEjzG.png")',
      'url("http://i.imgur.com/6EhAM7G.png")',
      'url("http://i.imgur.com/QOfZ5r8.png")',
      'url("http://i.imgur.com/Y4BHWJM.png")',
      'url("http://i.imgur.com/laSSeYN.png")',
      'url("http://i.imgur.com/HaYuGQi.png")',]
    var random = backgroundArr[Math.floor(Math.random()*8)]
    element.css({
      'background-image': backgroundArr[2],
      'background-size' : 'cover'
    });
  };
});
