'use strict';

adsApp.factory('adsData', function($http, $q, session){
    return{
        getAll: function(townId, categoryId, pageSize, startPage, status, sortBy, isUsers){
            var url = 'http://softuni-ads.azurewebsites.net/api/';
            var defer = $q.defer();
            var headers = {};

            if(isUsers){
                url += 'user/ads?pageSize=' + pageSize + '&startPage=' + startPage + '&status=' + status;
                headers["Authorization"] = "Bearer " + session.get().access_token;
            } else{
                url += 'ads?townId=' + townId + '&categoryId=' + categoryId + '&pagesize=' + pageSize + '&startpage=' + startPage + '&sortby=' + sortBy;
            }

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
        },
        getAllAsAdmin: function(townId, categoryId, pageSize, startPage, status, sortBy){
            var url = 'http://softuni-ads.azurewebsites.net/api/admin/ads?townId=' + townId + '&categoryId=' + categoryId + '&pagesize=' + pageSize + '&startpage=' + startPage + '&status=' + status + '&sortby=' + sortBy;
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