(function () {

'use strict';

var angular = require('angular');

var pinnedController = function pinnedController ($scope, apiRequest) {

  var filter = 'none';
  apiRequest.pinList().then(function (resp) {
  	$scope.saleCollection = resp.data.sales;
  });

  $scope.customFilter = function customFilter (sale) {
  	if (filter === 'none') { return true; }
  	else if (filter === sale.store) { return true; }
  	else { return false; }
  };

  $scope.setFilterVal = function setFilterVal ($ev, val) {
  	$ev.preventDefault();
  	filter = val;
  };

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
