(function () {

'use strict';

var angular = require('angular');

var saleController = function saleController ($scope, apiRequest) {
  // $scope.sale made avalible by storeController scope

  $scope.pin = 'PIN';

  $scope.pinIt = function pinIt (ev) {
      apiRequest.pinSale($scope.sale.sale_key).then(function (resp) {
          $scope.pin = 'PINNED';
      });
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
