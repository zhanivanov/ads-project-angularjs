'use strict';

adsApp.controller('EditProfileController',
    function EditProfileController($scope, authService, notifications){
        $scope.getUser = getUser;
        $scope.updateProfile = updateProfile;
        $scope.changePassword = changePassword;
        $scope.userInfo = {};
        $scope.password = {};

        function updateProfile(userInfo){
            authService.authorizedRequest(
                'PUT',
                'profile',
                userInfo,
                function(data){
                    notifications.success("Profile updated successfully");
                },
                function(error){
                    notifications.error("Some error occurred!");
                    console.log(error);
                }
            )
        }

        function changePassword(passwordInfo){
            authService.authorizedRequest(
                'PUT',
                'changepassword',
                passwordInfo,
                function(data){
                    notifications.success("Password updated successfully");
                },
                function(error){
                    notifications.error("Some error occurred!");
                    console.log(error);
                }
            )
        }

        function getUser(){
            authService.authorizedRequest(
                'GET',
                'profile',
                null,
                function(data){
                    $scope.userInfo.name = data.name;
                    $scope.userInfo.email = data.email;
                    $scope.userInfo.phoneNumber = data.phoneNumber;
                    $scope.userInfo.townId = data.townId;
                },
                function(error){
                    console.log(error);
                }
            )
        }
    }
)