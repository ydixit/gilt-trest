(function () {

'use strict';

var angular = require('angular');

var saleController = function saleController ($scope) {
  // $scope.sale made avalible by storeController scope

  debugger;

  var sale = $scope.sale;

  $scope.pinIt = function pinIt (ev) {
    alert('Sale: ' + sale.name + ' pinned!');
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

module.exports = angular.module('sale', [])

.controller('saleCtrl', ['$scope', saleController])

.directive('sale', saleDirective);

})();
