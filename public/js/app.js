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
      templateUrl: '/partials/projects.html',
      controller: 'projectController'
    })
    .state('galaxy', {
      url: '/galaxy',
      templateUrl: '/partials/galaxy.html'
    })
    .state('food', {
      url: '/food',
      templateUrl: '/partials/food.html'
    })
    .state('facecheck', {
      url: '/facecheck',
      templateUrl: '/partials/facecheck.html'
    })
    .state('twitch', {
      url: '/twitch',
      templateUrl: '/partials/twitch.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: '/partials/contact.html',
      controller:'contactController'
    })
    // use the HTML5 History API
    $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});
app.controller("contactController", function ($rootScope, $scope, $http) {
  $scope.submit = function () {
    console.log('yoyoyo')
    $http({
      method:"POST",
      url: '/email/send',
      data:$scope.email
    })
    .then(function(data) {
      alert('thanks, keep in touch!')
    })
    .catch(function (err) {
      console.log(err)
    })
  }
})
app.directive('backImg', function($rootScope){
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
