(function () {

'use strict';

var angular = require('angular');

var saleController = function saleController ($scope, apiRequest) {
  // $scope.sale made avalible by storeController scope

  $scope.pinIt = function pinIt (ev) {
    alert('you tried to pin sale.');
  };
};

var saleDirective = function saleDirective () {
  return {
    restrict: 'E',
    controller: 'saleCtrl',
    scope: {
      sale: '='
    },
    templateUrl : '/assets/templates/directive_partials/sale.html'
  };
};

module.exports = angular.module('sale', [/* dependency modules go here*/])

.controller('saleCtrl', ['$scope', saleController])

.directive('sale', saleDirective);

})();
