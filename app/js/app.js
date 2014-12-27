'use strict';

var adsApp = angular
    .module('adsApp', ['ngRoute', 'ngCookies', 'angular-growl'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '../app/templates/guestHomePage.html'
        })
            .when('/login', {
                templateUrl: '../app/templates/loginPage.html'
            })
            .when('/register', {
                templateUrl: '../app/templates/registerPage.html'
            })
    });