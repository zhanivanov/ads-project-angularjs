'use strict';

adsApp.controller('TownsController',
    function TownsController($scope, townsData){
        townsData.getAll()
            .then(function(data){
                $scope.towns = data;
            })
    }
)