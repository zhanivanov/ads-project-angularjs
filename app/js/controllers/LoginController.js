'use strict';

adsApp.controller('LoginController',
    function LoginController($scope, authService, $location, $window, notifications, $rootScope){
        $scope.credentials = {
            username: '',
            password: ''
        };

        $scope.login = function (credentials) {
            authService.login(credentials,
                function(data){
                    if(data.isAdmin){
                        notifications.success("WELCOME, ADMIN!");
                        $rootScope.$broadcast("userLoggedOrRegistered");
                        $location.path('/admin/home');
                    } else {
                        notifications.success("Successful login!");
                        $rootScope.$broadcast("userLoggedOrRegistered");
                        $location.path('/');
                    }
                },
                function(data){
                    var msg = data.error_description;
                    notifications.error(msg);
                }
            )
        };
    }
)