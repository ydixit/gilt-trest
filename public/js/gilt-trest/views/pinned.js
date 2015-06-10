(function () {

'use strict';

var angular = require('angular');

var pinnedController = function pinnedController ($scope, apiRequest) {

  $scope.customFilter = function customFilter (sale) {

  };

  $scope.setFilterVal = function setFilterVal ($ev, val) {

  };

  apiRequest.pinList().then(function (resp) {
  	$scope.saleCollection = resp.data.sales;
  });
};

module.exports = angular.module('pinned', [
	require('angular-route'),
	require('../services/requests').name,
	require('../viewModels/sale').name
])

.controller('pinnedController', ['$scope', 'apiRequest', pinnedController])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sales/pinned', {
    templateUrl: 'assets/templates/views/pinned.html',
    controller: 'pinnedController'
  });
}]);

})();