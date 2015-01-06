'use strict';

adsApp.controller('EditProfileController',
    function EditProfileController($scope, authService, notifications, $rootScope, session){
        $scope.getUser = getUser;
        $scope.updateProfile = updateProfile;
        $scope.changePassword = changePassword;
        $scope.userInfo = {};
        $scope.password = {};

        if($rootScope.user){
            $scope.userInfo['username'] = $rootScope.user.username;
            $scope.userInfo.name = $rootScope.user.name;
            $scope.userInfo.email = $rootScope.user.email;
            $scope.userInfo.phoneNumber = $rootScope.user.phoneNumber;
            $scope.userInfo.townId = $rootScope.user.townId;
            $scope.userInfo.isAdmin = $rootScope.user.isAdmin;
        } else{
            $scope.userInfo = {};
        }

        function updateProfile(userInfo){
            console.log(userInfo);
            var target = '';
            if(session.isAdmin()){
                target = 'user/' + userInfo.username;
            } else{
                target = 'profile';
            }
            authService.authorizedRequest(
                'PUT',
                target,
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
            var target = '';
            if(session.isAdmin()){
                target = 'setpassword';
                passwordInfo.username = $scope.userInfo.username;
            } else{
                target = 'changepassword';
            }
            authService.authorizedRequest(
                'PUT',
                target,
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