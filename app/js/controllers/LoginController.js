'use strict';

adsApp.controller('LoginController',
    function LoginController($scope, authService){
        $scope.credentials = {
            username: '',
            password: ''
        };
        $scope.login = function (credentials) {
            authService.login(credentials)
                .then(function (user) {
                    console.log(user);
            });
        };
    }
)