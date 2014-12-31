'use strict';

var adsApp = angular
    .module('adsApp', ['ngRoute', 'ngCookies'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '../app/templates/HomePage.html'
        })
            .when('/login', {
                templateUrl: '../app/templates/loginPage.html'
            })
            .when('/register', {
                templateUrl: '../app/templates/registerPage.html'
            })
            .when('/addnewad', {
                templateUrl: '../app/templates/addNewAdPage.html'
            })
            .when('/myads', {
                templateUrl: '../app/templates/MyAdsPage.html'
            })
            .when('/editad', {
                templateUrl: '../app/templates/editAdPage.html'
            })
            .when('/profile', {
                templateUrl: '../app/templates/EditProfilePage.html'
            })
    });