'use strict';

adsApp.factory('authService', function ($http, $q, session) {
        var defer = $q.defer();
        var url = 'http://softuni-ads.azurewebsites.net/api/user/login';

        return{
            login: function(credentials) {
                $http({method: 'POST', url: url, data:{
                    "username": credentials.username,
                    "password": credentials.password
                }})
                    .success(function(data, status, headers, config){
                        defer.resolve(data);
                        session.create(data.access_token, data.username);
                    })
                    .error(function(data, status, headers, config){
                        defer.reject(data);
                    });

                return defer.promise;
            },
            isAuthenticated: function(){
                return !!session.get().username;
            }
        }
})