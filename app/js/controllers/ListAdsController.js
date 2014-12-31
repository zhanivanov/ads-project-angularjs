'use strict';

adsApp.controller('ListAdsController',
    function ListAdsController($scope, adsData, $rootScope){
        var townId = '';
        var categoryId = '';

        $rootScope.$on('categoryClicked', function(event, category){
            categoryId = category;
            $scope.getAds();
        });

        $rootScope.$on('townClicked', function(event, town){
            townId = town;
            $scope.getAds();
        });

        $scope.getAds = function(){
            adsData.getAll(townId, categoryId)
                .then(function(data){
                    $scope.ads = data.ads;
                    console.log(data.ads);
                })
        }
    }
)