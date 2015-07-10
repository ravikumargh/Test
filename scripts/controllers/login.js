'use strict';

angular.module('yeomanApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $location, LoginService) {
    
      $scope.data = {};

      $scope.login = function () {
          LoginService.loginUser($scope.data.username, $scope.data.password).success(function (data) {
              $rootScope.isAuthenticated = sessionStorage.getItem("lastname");
              $location.path('/');
          }).error(function (data) {
               alert('Login failed! Please check your credentials!');
          });
          
          //console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
      }


  });
