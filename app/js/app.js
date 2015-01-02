'use strict';

var adsApp = angular
    .module('adsApp', ['ngRoute', 'ngCookies'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '../app/templates/pages/home-page.html'
        })
            .when('/login', {
                templateUrl: '../app/templates/pages/login-page.html'
            })
            .when('/register', {
                templateUrl: '../app/templates/pages/register-page.html'
            })
            .when('/addnewad', {
                templateUrl: '../app/templates/pages/add-new-ad-page.html',
                resolve: { authFilter: function(authFilter){
                        return authFilter();
                    }
                }
            })
            .when('/myads', {
                templateUrl: '../app/templates/pages/my-ads-page.html',
                resolve: { authFilter: function(authFilter){
                        return authFilter();
                    }
                }
            })
            .when('/editad', {
                templateUrl: '../app/templates/pages/edit-ad-page.html',
                resolve: { authFilter: function(authFilter){
                        return authFilter();
                    }
                }
            })
            .when('/profile', {
                templateUrl: '../app/templates/pages/edit-profile-page.html',
                resolve: { authFilter: function(authFilter){
                        return authFilter();
                    }
                }
            })
            .otherwise({ redirectTo: '/' });
    });