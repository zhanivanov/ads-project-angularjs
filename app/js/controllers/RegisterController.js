'use strict';

adsApp.controller('RegisterController',
    function RegisterController($scope, authService, $location, $window, notifications, $rootScope){
        $scope.credentials = {
            name: '',
            email: '',
            phone: '',
            townId: '',
            username: '',
            password: '',
            confirmPassword: ''
        };
        $scope.registerUser = function (credentials) {
            authService.register(credentials,
                function(data){
                notifications.success("Successful registration!");
                $rootScope.$broadcast("userLoggedOrRegistered");
                $location.path('/');
            },
                function(data){
                    var msg = "Some error occurred!";
                    if(data.modelState[""] !== undefined){
                        msg = data.modelState[""];
                    }
                    notifications.error(msg);
                }
            )
        };
    }
)