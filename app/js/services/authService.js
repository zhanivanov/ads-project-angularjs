'use strict';

adsApp.factory('authService', function ($http, $q, session) {
        var defer = $q.defer();
        var url = 'http://softuni-ads.azurewebsites.net/api/user/';

        return{
            login: function(credentials) {
                $http({method: 'POST', url: url + 'login', data:{
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
            register: function(credentials){
                $http({method: 'POST', url: url + 'register', data:{
                    "name": credentials.name,
                    "email": credentials.email,
                    "phone": credentials.phone,
                    "townId": credentials.townId,
                    "username": credentials.username,
                    "password": credentials.password,
                    "confirmPassword": credentials.confirmPassword
                }})
                    .success(function(data, status, headers, config){
                        defer.resolve(data);
                        session.create(data.access_token, data.username);
                    })
                    .error(function(data, status, headers, config){
                        defer.reject(data);
                    });

                return defer.promise;
            }
        }
})