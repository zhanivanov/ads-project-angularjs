'use strict';

adsApp.factory('authService', function ($http, session, $q) {
        var url = 'http://softuni-ads.azurewebsites.net/api/user/';

        return{
            login: function(credentials, successCallback, errorCallback) {
                $http({method: 'POST', url: url + 'login', data:{
                    "username": credentials.username,
                    "password": credentials.password
                }})
                    .success(function(data, status, headers, config){
                        session.create(data.access_token, data.username, data.isAdmin);
                        successCallback(data);
                    })
                    .error(function(data, status, headers, config){
                        errorCallback(data);
                    });
            },
            register: function(credentials, successCallback, errorCallback){
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
                        session.create(data.access_token, data.username);
                        successCallback(data);
                    })
                    .error(function(data, status, headers, config){
                        errorCallback(data);
                    });
            },
            logout: function(successCallback, errorCallback){
                $http({method: 'POST', url: url + 'logout', headers: {
                    "Authorization": "Bearer " + session.get().access_token
                }})
                    .success(function(data, status, headers, config){
                        successCallback(data);
                    })
                    .error(function(data, status, headers, config){
                        errorCallback(data);
                    });
            },
            authorizedRequest: function(method, targetUrl, data, successCallback, errorCallback){
                $http({
                    method: method,
                    url: url + targetUrl,
                    headers: {
                        "Authorization": "Bearer " + session.get().access_token
                    },
                    data: data
                })
                    .success(function(data, status, headers, config){
                        successCallback(data);
                    })
                    .error(function(data, status, headers, config){
                        errorCallback(data);
                    });
            }
        }
})