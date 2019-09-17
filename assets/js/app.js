var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	if(window.history && window.history.pushState){
	    $locationProvider.html5Mode(true);
	}

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

app.controller('myCtrl', function($scope) {

});