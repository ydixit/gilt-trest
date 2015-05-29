(function () {

var angular = require('angular');

var userUrlBase = '/users';
var saleUrlBase = '/sales';

module.exports = angular.module('request', [])
  .service('apiRequest', function($http, $log, $location) {
    $http.defaults.headers.common.username = 'kyle';
    function login (userForm) {
      var url = userUrlBase + '/login';

      return $http({
        method: 'POST',
        url : url,
        body : userForm
      })
      .success(function (resp) {
        $log.debug(resp.data);
        $http.defaults.headers.common.username = resp.data.username;
        $location.path('/sales/women');
      })
      .error(function (error) {
        $log.debug(error);
      });
    }

    function register (userObject) {
      var url = userUrlBase + '/register';

      return $http({
        method: 'POST',
        url : url,
        body : userObject
      })
      .success(function (resp) {
        $log.debug(resp.data);
        $http.defaults.headers.common.username = resp.data.username;
        $location.path(saleUrlBase + '/women');
      });
    }

    function storeView (storeKey) {
      var url = saleUrlBase + '/' + storeKey;

      return $http({
        method: 'GET',
        url : url
      })
      .success(function (resp) {
        $log.debug(resp);
        return resp.sales;
      })
      .error(function (error) {
        $log.debug(error);
      });
    }

    function pinList () {
      var url = saleUrlBase + '/pinned';

      return $http({
        method: 'GET',
        url : url
      })
      .success(function (resp) {
        $log.debug(resp.data.sales);
        return resp.data.sales;
      });
    }

    function pinSale (saleKey) {
      var url = saleUrlBase + '/' + saleKey + '/pin';

      return $http({
        method: 'POST',
        url : url
      })
      .success(function (resp) {
        $log(resp.data);
        return resp.data;
      });
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
