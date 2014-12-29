'use strict';

adsApp.controller('NewAdController',
    function NewAdController($scope, authService){
        $scope.publish = publishAd;

        function publishAd(details, imageSrc){
            details.imageDataUrl = imageSrc;
            authService.authorizedRequest(
                'POST',
                'ads',
                details,
                function(data){
                    console.log(data);
                },
                function(error){
                    console.log(error);
                }
            )
        }
    }
)