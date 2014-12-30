'use strict';

adsApp.controller('ConfirmDeleteController',
    function ConfirmDeleteController($scope, $rootScope, authService, notifications){
        $scope.delete = deleteAd;

        $rootScope.$on('confirmDelete', function(event, ad){
            $scope.deleted = ad;
        });

        function deleteAd(id){
            authService.authorizedRequest(
                'DELETE',
                'ads/' + id,
                null,
                function(data){
                    notifications.error("Successfully deleted the ad.");
                    $('#' + id).remove();
                },
                function(error){
                    console.log(error);
                }
            )
        }
    }
);