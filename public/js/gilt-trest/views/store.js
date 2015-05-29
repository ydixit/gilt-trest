(function () {

'use strict';

var angular = require('angular');

var data = require('../viewModels/data');

var storeController = function storeController ($scope, $routeParams, apiRequest) {
  $scope.storeKey = $routeParams.storeKey;
  debugger;
  apiRequest.storeView($scope.storeKey).then(function (data) {
  	debugger;
  	$scope.saleCollection = data;
  });

  $scope.saleCollection = data;
};

module.exports = angular.module('store', [
	require('angular-route'),
	require('../services/requests').name
	// ,
	// require('../viewModels/saleCollection').name
])

.controller('storeController', ['$scope', '$routeParams', 'apiRequest', storeController])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/store/:storeKey', {
    templateUrl: '/templates/views/store.html',
    controller: 'storeController'
  });
}]);

})();
