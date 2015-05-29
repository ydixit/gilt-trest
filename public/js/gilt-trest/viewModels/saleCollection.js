(function () {

'use strict';

var angular = require('angular');

var saleCollectionDirective = function saleCollectionDirective () {
  return {
    restrict: 'E',
    controller: 'saleCollectionCtrl',
    scope: {
      saleCollection: '='
    },
    templateUrl : '/assets/templates/directive_partials/sale_list.html'
  };
};

var saleCollectionController = function saleCollectionController ($scope) {
	console.log($scope.saleCollection);
};

module.exports = angular.module('saleCollection', [require('./sale').name])

.controller('saleCollectionCtrl', ['$scope', saleCollectionController])

.directive('saleCollection', saleCollectionDirective);

})();
