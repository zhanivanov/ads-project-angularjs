'use strict';

adsApp.controller('CategoriesController',
    function CategoriesController($scope, categoriesData){
        categoriesData.getAll()
            .then(function(data){
                $scope.categories = data;
            })
    }
)