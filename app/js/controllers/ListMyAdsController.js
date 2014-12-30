'use strict';

adsApp.controller('ListMyAdsController',
    function ListMyAdsController($scope, $rootScope, adsData){

        listAll();

        $rootScope.$on('deactivated', function(){
            listAll();
        });

        $rootScope.$on('publishedAgain', function(){
            listAll();
        });

        $rootScope.$on('deleted', function(){
            listAll();
        });

        function listAll() {
            adsData.getAll(true)
                .then(function (data) {
                    $scope.ads = data.ads;
                    console.log(data.ads);
                })
        }
    }
)