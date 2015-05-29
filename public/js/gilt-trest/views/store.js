(function () {

'use strict';

var angular = require('angular');

// var data = require('../viewModels/data');

var storeController = function storeController ($scope, $routeParams, apiRequest) {
  $scope.storeKey = $routeParams.storeKey;

  apiRequest.storeView($scope.storeKey).then(function (data) {
  	$scope.saleCollection = data;
    console.log('storeController: ', $scope.saleCollection);
  });

  // $scope.saleCollection = data;
};

module.exports = angular.module('store', [
	require('angular-route'),
	require('../services/requests').name,
	require('../viewModels/saleCollection').name
])

.controller('storeController', ['$scope', '$routeParams', 'apiRequest', storeController])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/store/:storeKey', {
    templateUrl: 'assets/templates/views/store.html',
    controller: 'storeController'
  });
}]);

})();
