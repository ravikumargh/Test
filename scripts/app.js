'use strict';

angular
 .module('yeomanApp', [
   'ngRoute'
 ])
 .config(function ($routeProvider) {
     $routeProvider
       .when('/', {
           templateUrl: 'views/main.html',
           controller: 'MainCtrl'
       })
       .when('/about', {
           templateUrl: 'views/about.html',
           controller: 'AboutCtrl'
       })
         .when('/services', {
             templateUrl: 'views/services.html',
             controller: 'ServicesCtrl'
         })
         .when('/carrier', {
             templateUrl: 'views/carrier.html',
             controller: 'CarrierCtrl'
         })
         .when('/contact-us', {
             templateUrl: 'views/contact-us.html',
             controller: 'ContactUsCtrl'
         })
         .when('/login', {
             templateUrl: 'views/login.html',
             controller: 'LoginCtrl'
         })
          .when('/partyWorkers', {
              templateUrl: 'views/party-workers.html',
              controller: 'PartyWorkersCtrl'
          })
         .when('/PeopleIssues', {
             templateUrl: 'views/people-issues.html',
             controller: 'PeopleIssuesCtrl'
         })
       .otherwise({
           redirectTo: '/'
       });
 }).run(['$rootScope', '$location',  '$http', 
		function ($rootScope, $location,  $http) {
		    $rootScope.isAuthenticated = sessionStorage.getItem("lastname");
		}
 ]);

