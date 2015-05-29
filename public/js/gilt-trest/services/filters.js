/*global SyndicationApp: false*/

'use strict';

SyndicationApp.filter('urlEncode', function() {
  return function(input) {
    return encodeURIComponent(input);
  };
}).config(['$httpProvider', function ($httpProvider) {
  // see https://groups.google.com/forum/?fromgroups=#!topic/angular/26N_Orc0qAE
  $httpProvider.defaults.headers.common["X-Requested-With"] = undefined;
}]);

SyndicationApp.filter('jsonStringify', function() {
  return function(input) {
    var data = {}, k;
    for (k in input) {
      // filter inherited properties and angular meta properties
      if (input.hasOwnProperty(k) && k[0] !== '$') {
        data[k] = input[k];
      }
    }
    return JSON.stringify(data, null, 2);
  };
});
