'use strict';

adsApp.factory('authService', function ($http, session, $q) {
        var isAdminUrl = '';
        var url = 'http://softuni-ads.azurewebsites.net/api/';

        return{
            login: function(credentials, successCallback, errorCallback) {
                isAdminUrl = '';
                $http({method: 'POST', url: url + 'user/login', data:{
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
                isAdminUrl = '';
                $http({method: 'POST', url: url + 'user/register', data:{
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
                isAdminUrl = '';
                $http({method: 'POST', url: url + 'user/logout', headers: {
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
                    url: url + (session.isAdmin() ? 'admin/' : 'user/') + targetUrl,
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