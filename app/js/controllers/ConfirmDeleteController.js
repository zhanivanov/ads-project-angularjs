'use strict';

adsApp.controller('ConfirmDeleteController',
    function ConfirmDeleteController($scope, $rootScope, authService, notifications){
        $scope.delete = deleteAd;
        $scope.deleteUser = deleteUser;

        $rootScope.$on('confirmDelete', function(event, ad){
            $scope.deleted = ad;
        });

        $rootScope.$on('confirmDeleteUser', function(event, user){
            $scope.deletedUser = user;
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

        function deleteUser(username) {
            authService.authorizedRequest(
                'DELETE',
                'user/' + username,
                null,
                function (data) {
                    notifications.error("Successfully deleted the user.");
                    $('#user-' + username).remove();
                },
                function (error) {
                    console.log(error);
                }
            )
        }
    }
);