'use strict';

adsApp.controller('ViewsController',
    function ViewsController($scope){
        $scope.template = {
            "authAside": "../app/templates/authentication-aside.html",
            "allAdsMain": "../app/templates/list-ads.html",
            "townsAside": "../app/templates/categories-towns-aside.html",
            "loginForm": "../app/templates/login-form.html",
            "registerForm": "../app/templates/register-form.html"
        }
    }
)