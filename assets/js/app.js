(function () {
    'use strict';

    var app = angular.module('myApp', ['ui.router']);

    app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('/');
     
        $stateProvider
            .state('home', {
                url:'/',
                controller: 'homeCtrl',
                templateUrl: 'home.html'
            })
            .state('about', {
                url:'/about',
                controller: 'aboutCtrl',
                templateUrl: 'about.html'
            })
     });

    app.controller('myCtrl', function($scope, $state, $location) {
    });   

    app.controller('aboutCtrl', function($scope) {
       $scope.users = [
            {}
        ];
       
       $scope.addUser = function() {
           var newUser = {};
           $scope.users.push(newUser);
       }
       
       $scope.removeUser = function(user) {
           var index = $scope.users.indexOf(user);
           $scope.users.splice(index, 1);
       }

    });
})();