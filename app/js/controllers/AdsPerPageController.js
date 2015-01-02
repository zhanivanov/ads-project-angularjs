'use strict';

adsApp.controller('AdsPerPageController',
    function AdsPerPageController($scope, $rootScope){
        $scope.adsPerPage = 5;

        $scope.setAdsPerPage = function(ads){
            $scope.adsPerPage = ads;
            $rootScope.$broadcast('adsPerPage', ads);
        }
    }
)