'use strict';

adsApp.controller('ListMyAdsController',
    function ListMyAdsController($scope, $rootScope, adsData){

        listAll();

        $rootScope.$on('added', function(){
            listAll();
        });

        function listAll() {
            adsData.getAll(true)
                .then(function (data) {
                    $scope.ads = data.ads;
                })
        }
    }
)