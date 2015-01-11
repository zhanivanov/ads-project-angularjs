'use strict';

adsApp.controller('ListMyAdsController',
    function ListMyAdsController($scope, $rootScope, adsData){
        var status = '';
        var startPage = '';
        var pageSize = 5;


        $rootScope.$on('added', function(){
            $scope.listAll();
        });

        $rootScope.$on('statusChanged', function(event, adsStatus){
            status = adsStatus;
            $scope.listAll();
        });

        $rootScope.$$listeners.pageChange = [];
        $rootScope.$on('pageChange', function(event, page){
            startPage = page;
            $scope.listAll();
        });

        $rootScope.$on('adsPerPage', function(event, ads){
            pageSize = ads;
            $scope.listAll();
        });

        $scope.$on('sendNumPages', function(event, numPages){
            $rootScope.$broadcast('setNumPages', numPages);
        });

        $scope.listAll = function() {
            adsData.getAll('', '', pageSize, startPage, status, 'Date', true)
                .then(function (data) {
                    console.log(data.ads);
                    $scope.$emit('sendNumPages', data.numPages);
                    $scope.ads = data.ads;
                })
        }
    }
)