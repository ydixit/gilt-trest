(function () {

'use strict';

var angular = require('angular');

var loginController = function loginController ($scope, $location, apiRequest) {
  // login code goes here
};

var registerController = function registerController ($scope, $location, apiRequest) {
  // register code goes here
};

module.exports = angular.module('login', [require('angular-route')])

.controller('loginCtrl', ['$scope', loginController])
.controller('registerCtrl', ['$scope', registerController])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'assets/templates/views/login.html',
    controller: 'loginCtrl'
  }).when('/register', {
    templateUrl: 'assets/templates/views/register.html',
    controller: 'registerCtrl'
  });
}]);

})();
