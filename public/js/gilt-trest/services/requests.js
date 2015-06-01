(function () {

var angular = require('angular');

var data = require('./data');

module.exports = angular.module('request', [])
  .service('apiRequest', function($http, $log, $location) {


    // set $http.defaults.headers.common.username to login a user
    function login (userForm) {
      alert('Impliment login request to server.');
    }

    function register (userObject) {
      alert('Impliment register request to server.');
    }

    function storeView (storeKey) {
      $http.defaults.headers.common.username = 'kyle';

      if ($http.defaults.headers.common.username === 'kyle') {
        alert('Impliment login/reg requests before you can see sales');
      } else {
        alert('returning static sale list. Impliment sale request to get live sales.');
      }

      return data;
    }

    function pinList () {

      if ($http.defaults.headers.common.username === 'kyle') {
        alert('Impliment login/reg requests before you can see pinned sales');
      } else {
        alert('returning static sale list. Impliment pin logic on sale page to get your pinned sales.');
      }
    }

    function pinSale (saleKey) {
      alert('Make get request to pin a sale');
    }

    return {
      login     : login,
      register  : register,
      storeView : storeView,
      pinList   : pinList,
      pinSale   : pinSale
    };

  });

})();
