'use strict';

adsApp.controller('RegisterController',
    function RegisterController($scope, authService, $location, $window, growl){
        $scope.credentials = {
            name: '',
            email: '',
            phone: '',
            townId: '',
            username: '',
            password: '',
            confirmPassword: ''
        };
        $scope.register = function (credentials) {
            authService.register(credentials)
                .then(function (user) {
                    growl.success("Succesful registration!");
                    //$location.path('/');
                    //$window.location.reload();
                });
        };
    }
)