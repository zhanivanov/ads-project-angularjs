'use strict';

var adsApp = angular
    .module('adsApp', ['ngRoute', 'ngCookies', 'angular-loading-bar'])
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
            .when('/admin/home', {
                templateUrl: '../app/templates/pages/home-page.html',
                resolve: { adminFilter: function(adminFilter){
                        return adminFilter();
                    }
                }
            })
            .when('/admin/editad',{
                templateUrl: '../app/templates/pages/edit-ad-page.html',
                resolve: { adminFilter: function(adminFilter){
                        return adminFilter();
                    }
                }
            })
            .when('/admin/users',{
                templateUrl: '../app/templates/pages/admin/users-page.html',
                resolve: { adminFilter: function(adminFilter){
                        return adminFilter();
                    }
                }
            })
            .when('/admin/users/edit',{
                templateUrl: '../app/templates/pages/edit-profile-page.html',
                resolve: { adminFilter: function(adminFilter){
                        return adminFilter();
                    }
                }
            })
            .when('/admin/categories',{
                templateUrl: '../app/templates/pages/admin/categories-page.html',
                resolve: { adminFilter: function(adminFilter){
                        return adminFilter();
                    }
                }
            })
            .when('/admin/categories/create',{
                templateUrl: '../app/templates/pages/admin/create-category-page.html',
                resolve: { adminFilter: function(adminFilter){
                        return adminFilter();
                    }
                }
            })
            .when('/admin/categories/edit',{
                templateUrl: '../app/templates/pages/admin/edit-category-page.html',
                resolve: { adminFilter: function(adminFilter){
                        return adminFilter();
                    }
                }
            })
            .otherwise({ redirectTo: '/' });
    });