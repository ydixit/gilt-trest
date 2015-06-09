(function () {

'use strict';

var angular = require('angular');

var saleController = function saleController ($scope, apiRequest) {
  // $scope.sale made avalible by storeController scope

  $scope.pinIt = function pinIt (ev) {
    alert('Impliment pin method!');
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

module.exports = angular.module('sale', [require('../services/requests').name])

.controller('saleCtrl', ['$scope', 'apiRequest', saleController])

.directive('sale', saleDirective);

})();
