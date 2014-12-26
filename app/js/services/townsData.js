'use strict';

adsApp.factory('townsData', function($http, $q){
    return{
        getAll: function(){
            var url = 'http://softuni-ads.azurewebsites.net/api/towns';
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