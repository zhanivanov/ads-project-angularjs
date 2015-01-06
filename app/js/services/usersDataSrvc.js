'use strict';

adsApp.factory('usersDataSrvc', function($http, $q, session){
    return{
        getAll: function(pageSize, startPage, sortBy){
            var url = 'http://softuni-ads.azurewebsites.net/api/admin/users?pageSize=' + pageSize + '&startPage=' + startPage + '&sortBy=' + sortBy;
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