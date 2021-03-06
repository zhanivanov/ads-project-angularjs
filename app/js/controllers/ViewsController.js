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
            "adminNav": "../app/templates/admin/admin-navigation-aside-template.html",
            "usersTable": "../app/templates/admin/users-table.html",
            "confirmDeleteUser": "../app/templates/admin/confirm-delete-user-template.html",
            "categoriesTable": "../app/templates/admin/categories-table.html",
            "confirmDeleteCategory": "../app/templates/admin/confirm-delete-category-template.html",
            "createCategory": "../app/templates/admin/create-category-template.html",
            "editCategory": "../app/templates/admin/edit-category-template.html",
            "townsTable": "../app/templates/admin/towns-table.html",
            "confirmDeleteTown": "../app/templates/admin/confirm-delete-town-template.html",
            "editTown": "../app/templates/admin/edit-town-template.html",
            "createTown": "../app/templates/admin/create-town-template.html",
            "adsPerPage": "../app/templates/adsPerPage-template.html",
            "sortBy": "../app/templates/sortBy-template.html"
        }
    }
)