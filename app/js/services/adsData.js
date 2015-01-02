'use strict';

adsApp.factory('adsData', function($http, $q, session){
    return{
        getAll: function(townId, categoryId, pageSize, startPage, isUsers){
            var url = 'http://softuni-ads.azurewebsites.net/api/';
            var defer = $q.defer();
            var headers = {};

            if(isUsers){
                url += 'user/ads';
                headers["Authorization"] = "Bearer " + session.get().access_token;
            } else{
                url += 'ads?townId=' + townId + '&categoryId=' + categoryId + '&pagesize=' + pageSize + '&startpage=' + startPage;
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
        }
    }
})