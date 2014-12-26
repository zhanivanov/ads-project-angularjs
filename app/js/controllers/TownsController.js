'use strict';

adsApp.controller('TownsController',
    function TownsController($scope, townsData){
        townsData.getAll()
            .then(function(data){
                console.log(data);
                $scope.towns = data;
            })
    }
)