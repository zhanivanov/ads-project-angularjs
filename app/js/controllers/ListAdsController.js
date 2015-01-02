'use strict';

adsApp.controller('ListAdsController',
    function ListAdsController($scope, adsData, $rootScope, session){
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

        $rootScope.$$listeners.pageChange = [];
        $rootScope.$on('pageChange', function(event, page){
            startPage = page;
            $scope.getAds();
        });

        $rootScope.$on('adsPerPage', function(event, ads){
            console.log(ads);
            pageSize = ads;
            $scope.getAds();
        });

        $scope.$on('sendNumPages', function(event, numPages){
            $rootScope.$broadcast('setNumPages', numPages);
        });

        $scope.getAds = function(){
            console.log(session.isAdmin());
            if(session.isAdmin()){
                adsData.getAllAsAdmin()
                    .then(function(data){
                        $scope.$emit('sendNumPages', data.numPages);
                        console.log(data.ads);
                        $scope.ads = data.ads;
                    })
            } else {
                adsData.getAll(townId, categoryId, pageSize, startPage)
                    .then(function (data) {
                        $scope.$emit('sendNumPages', data.numPages);
                        console.log(data.ads);
                        $scope.ads = data.ads;
                    })
            }
        }
    }
)