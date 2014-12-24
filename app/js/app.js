'use strict';

var adsApp = angular
    .module('adsApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '../app/templates/list-ads.html'
        })
    });