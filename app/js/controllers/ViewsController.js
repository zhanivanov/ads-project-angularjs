'use strict';

adsApp.controller('ViewsController',
    function ViewsController($scope){
        $scope.template = {
            "authAside": "../app/templates/authentication-aside.html",
            "navigationAside": "../app/templates/navigation-aside.html",
            "allAdsMain": "../app/templates/list-ads.html",
            "listMyAds": "../app/templates/list-my-ads.html",
            "townsAside": "../app/templates/categories-towns-aside.html",
            "loginForm": "../app/templates/login-form.html",
            "registerForm": "../app/templates/register-form.html",
            "addNewAd": "../app/templates/add-new-ad-template.html",
            "myAdsAside": "../app/templates/my-ads-aside.html"
        }
    }
)