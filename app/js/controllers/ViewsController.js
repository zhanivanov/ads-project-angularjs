'use strict';

adsApp.controller('ViewsController',
    function ViewsController($scope){
        $scope.template = {
            "authAside": "../app/templates/authentication-aside-template.html",
            "navigationAside": "../app/templates/navigation-aside-template.html",
            "allAdsMain": "../app/templates/list-ads-template.html",
            "listMyAds": "../app/templates/list-my-ads-template.html",
            "townsAside": "../app/templates/categories-towns-aside-template.html",
            "loginForm": "../app/templates/login-form-template.html",
            "registerForm": "../app/templates/register-form-templates.html",
            "addNewAd": "../app/templates/add-new-ad-template.html",
            "myAdsAside": "../app/templates/my-ads-aside-template.html",
            "editAd": "../app/templates/edit-ad-form-template.html",
            "confirmDelete": "../app/templates/confirm-delete-template.html",
            "editProfile": "../app/templates/edit-profile-template.html",
            "pager": "../app/templates/pager-template.html",
            "adminNav": "../app/templates/admin/admin-navigation-aside-template.html"
        }
    }
)