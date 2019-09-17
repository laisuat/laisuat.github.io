var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'home.html'
        })
        .state('about', {
            url:'/about',
            templateUrl: 'about.html'
        })
 });

app.controller('myCtrl', function($scope, $state, $location) {
    angular.element($('#myElement')).datepicker({
        uiLibrary: 'bootstrap4'
    });
});