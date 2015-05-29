(function () {

'use strict';

var angular = require('angular');

var loginController = function loginController ($scope, apiRequest) {
  console.log('login controller');
  apiRequest.login({'username':'kyle', 'email':'kdorman@gilt.com'});
};

module.exports = angular.module('login', [
	require('angular-route'),
	require('../services/requests').name
])

.controller('loginCtrl', ['$scope', 'apiRequest', loginController])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: '/templates/views/login.html',
    controller: 'loginCtrl'
  });
}]);

})();
