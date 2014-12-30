'use strict';

adsApp.controller('NewAdController',
    function NewAdController($scope, authService, notifications, $rootScope, $location){
        $scope.publish = publishAd;

        function publishAd(details, imageSrc){
            details.imageDataUrl = imageSrc;
            authService.authorizedRequest(
                'POST',
                'ads',
                details,
                function(data){
                    $rootScope.$broadcast('added');
                    $location.path('/myads');
                    notifications.success("Ad created successfully!");
                },
                function(error){
                    notifications.error(error.modelState['model.Text']);
                }
            )
        }
    }
)