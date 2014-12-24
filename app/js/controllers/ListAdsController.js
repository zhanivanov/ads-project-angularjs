'use strict';

adsApp.controller('ListAdsController',
    function ListAdsController($scope, adsData){

        adsData.getAll()
            .then(function(data){
                $scope.ads = data.ads;
                console.log(data.ads);
            })
    }
)