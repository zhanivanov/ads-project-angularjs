'use strict';

adsApp.controller('AdRequestsController',
    function AdRequestsController($scope, $rootScope, authService, notifications){

        $scope.deactivate = deactivate;
        $scope.publishAgain = publishAgain;
        $scope.delete = deleteAd;

        function deactivate(id){
            authService.authorizedRequest(
                'PUT',
                'ads/deactivate/' + id,
                null,
                function(data){
                    $rootScope.$broadcast('deactivated');
                    notifications.info("Successfully deactivated the ad.")
                },
                function(error){
                    console.log(error);
                }
            )
        }

        function publishAgain(id){
            authService.authorizedRequest(
                'PUT',
                'ads/publishagain/' + id,
                null,
                function(data){
                    $rootScope.$broadcast('publishedAgain');
                    notifications.success("Successfully published the ad.")
                },
                function(error){
                    console.log(error);
                }
            )
        }

        function deleteAd(id){
            authService.authorizedRequest(
                'DELETE',
                'ads/' + id,
                null,
                function(data){
                    $rootScope.$broadcast('deleted');
                    notifications.error("Successfully deleted the ad.")
                },
                function(error){
                    console.log(error);
                }
            )
        }
});