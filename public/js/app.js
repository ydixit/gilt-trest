/*global angular: false, jsRoutes: false*/
(function () {

'use strict';

var angular = require('angular');

/* App Module */
angular.module('gilt-trest',
  [
    require('./gilt-trest/views/store').name,
    require('./gilt-trest/views/login').name,
    require('angular-route')
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/store/women'});
  }]);

})();
