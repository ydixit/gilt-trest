(function () {

'use strict';

var angular = require('angular');

var pinnedController = function pinnedController ($scope) {

  $scope.customFilter = function customFilter (sale) {

  };

  $scope.setFilterVal = function setFilterVal ($ev, val) {

  };
};

module.exports = angular.module('pinned', [

])

.controller('pinnedController', ['$scope', pinnedController]);

})();
