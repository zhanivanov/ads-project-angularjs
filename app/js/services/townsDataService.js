'use strict';

adsApp.factory('townsData', function($http, $q, session){
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
        },
        getAllWithSort: function(pageSize, startPage, sortBy){
            var url = 'http://softuni-ads.azurewebsites.net/api/admin/towns?pageSize=' + pageSize + '&startPage=' + startPage + '&sortBy=' + sortBy;
            var defer = $q.defer();
            var headers = {};
            headers["Authorization"] = "Bearer " + session.get().access_token;

            $http({
                method: 'GET',
                url: url,
                headers: headers
            })
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