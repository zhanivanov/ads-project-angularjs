'use strict';

adsApp.controller('ListAdsController',
    function ListAdsController($scope, adsData, $rootScope, session){
        var townId = '';
        var categoryId = '';
        var pageSize = 5;
        var startPage = 1;
        var status = '';
        var sortBy = '-Date';

        $rootScope.$on('categoryClicked', function(event, category){
            categoryId = category;
            $scope.getAds();
        });

        $rootScope.$on('townClicked', function(event, town){
            townId = town;
            $scope.getAds();
        });

        $rootScope.$on('statusChanged', function(event, adsStatus){
            status = adsStatus;
            $scope.getAds();
        });

        $rootScope.$on('sortBy', function(event, sortByExp){
            if(!sortByExp.localeCompare('Date')){
                sortBy = '-' + sortByExp;
            } else{
                sortBy = sortByExp;
            }

            $scope.getAds();
        });

        $rootScope.$$listeners.pageChange = [];
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
            if(session.isAdmin()){
                adsData.getAllAsAdmin(townId, categoryId, pageSize, startPage, status, sortBy)
                    .then(function(data){
                        $scope.$emit('sendNumPages', data.numPages);
                        $scope.ads = data.ads;
                    })
            } else {
                adsData.getAll(townId, categoryId, pageSize, startPage, '', sortBy)
                    .then(function (data) {
                        $scope.$emit('sendNumPages', data.numPages);
                        $scope.ads = data.ads;
                    })
            }
        }
    }
)