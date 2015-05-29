(function () {

var angular = require('angular');

var urlBase = '/api';

module.exports = angular.module('request', [])
  .service('apiRequest', function($http, $log, $location) {

    function login (userForm) {
      var url = urlBase + '/users/login';

      return $http({
        method: 'POST',
        url : url,
        body : userForm
      })
      .success(function (userObject) {
        $log.debug(userObject);
        $http.defaults.headers.common.username = userObject.username;
        $location.path('/sale/women');
      })
      .error(function (error) {
        $log.debug(error);
      });
    }

    function register (userObject) {
      var url = urlBase + '/users/register';

      return $http({
        method: 'POST',
        url : url,
        body : userObject
      })
      .success(function (userObject) {
        $log.debug(userObject);
        $http.defaults.headers.common.username = userObject.username;
        $location.path('/sale/women');
      });
    }

    function storeView (storeKey) {
      var url = urlBase + '/sale/' + storeKey;

      return $http({
        method: 'GET',
        url : url
      })
      .success(function (saleCollection) {
        $log.debug(saleCollection);
        return saleCollection;
      })
      .error(function (error) {
        $log.debug(error);
      });
    }

    function pinList () {
      var url = urlBase + '/sale/pinned';

      return $http({
        method: 'GET',
        url : url
      })
      .success(function (saleCollection) {
        $log.debug(saleCollection);
        return saleCollection;
      });
    }

    function pinSale (saleKey) {
      var url = urlBase + '/sale/' + saleKey + '/pin';

      return $http({
        method: 'POST',
        url : url
      })
      .success(function (saleObject) {
        $log(saleObject);
        return saleObject;
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
