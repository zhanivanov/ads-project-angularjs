'use strict';

adsApp.controller('ListAdsController',
    function ListAdsController($scope, adsData, $rootScope){
        var townId = '';
        var categoryId = '';
        var pageSize = 5;
        var startPage = 1;

        $rootScope.$on('categoryClicked', function(event, category){
            categoryId = category;
            $scope.getAds();
        });

        $rootScope.$on('townClicked', function(event, town){
            townId = town;
            $scope.getAds();
        });

        $rootScope.$on('pageChange', function(event, page){
            startPage = page;
            $scope.getAds();
        });

        $rootScope.$on('adsPerPage', function(event, ads){
            pageSize = ads;
            $scope.getAds();
        });

        $scope.$on('sendNumPages', function(event, numPages){
            $rootScope.$broadcast('setNumPages', numPages);
        });

        $scope.getAds = function(){
            adsData.getAll(townId, categoryId, pageSize, startPage)
                .then(function(data){
                    $scope.$emit('sendNumPages', data.numPages);
                    $scope.ads = data.ads;
                })
        }
    }
)