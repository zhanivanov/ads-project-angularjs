'use strict';

adsApp.factory('adsData', function($http, $q, $log){
    return{
        getAll: function(){
            var url = 'http://softuni-ads.azurewebsites.net/api/ads';
            var defer = $q.defer();

            $http({method: 'GET', url: url})
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                })
                .error(function(data, status, headers, config){
                    defer.reject(data);
                });

            return defer.promise;
        }
    }
})