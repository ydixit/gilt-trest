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
    templateUrl : 'templates/directive_partials/sale_collection.html'
  };
};

var saleCollectionController = function saleCollectionController ($scope) {
	console.log('saleCollection');
};

module.exports = angular.module('saleCollection', [require('./sale')])

.controller('saleCollectionCtrl', ['$scope', saleCollectionController])

.directive('saleCollection', saleCollectionDirective);

})();
