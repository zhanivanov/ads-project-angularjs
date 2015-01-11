'use strict';

adsApp.controller('ConfirmDeleteController',
    function ConfirmDeleteController($scope, $rootScope, authService, notifications){
        $scope.delete = deleteAd;
        $scope.deleteUser = deleteUser;
        $scope.deleteCategory = deleteCategory;
        $scope.deleteTown = deleteTown;

        $rootScope.$on('confirmDelete', function(event, ad){
            $scope.deleted = ad;
        });

        $rootScope.$on('confirmDeleteUser', function(event, user){
            $scope.deletedUser = user;
        });

        $rootScope.$on('confirmDeleteCategory', function(event, category){
            $scope.deletedCategory = category;
        });

        $rootScope.$on('confirmDeleteTown', function(event, town){
            $scope.deletedTown = town;
        });

        function deleteAd(id){
            authService.authorizedRequest(
                'DELETE',
                'ads/' + id,
                null,
                function(data){
                    notifications.info("Successfully deleted the ad.");
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
                    notifications.info("Successfully deleted the user.");
                    $('#user-' + username).remove();
                },
                function (error) {
                    notifications.error("Some error occurred!");
                    console.log(error);
                }
            )
        }

        function deleteCategory(id) {
            authService.authorizedRequest(
                'DELETE',
                'categories/' + id,
                null,
                function (data) {
                    notifications.info("Successfully deleted the category.");
                    $('#category-' + id).remove();
                },
                function (error) {
                    notifications.error("Some error occurred!");
                    console.log(error);
                }
            )
        }

        function deleteTown(id) {
            authService.authorizedRequest(
                'DELETE',
                'towns/' + id,
                null,
                function (data) {
                    notifications.info("Successfully deleted the town.");
                    $('#town-' + id).remove();
                },
                function (error) {
                    notifications.error("Some error occurred!");
                    console.log(error);
                }
            )
        }
    }
);