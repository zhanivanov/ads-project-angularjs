'use strict';

adsApp.controller('LoginController',
    function LoginController($scope, authService, $location, $window){
        $scope.credentials = {
            username: '',
            password: ''
        };
        $scope.login = function (credentials) {
            authService.login(credentials)
                .then(function (user) {
                    $location.path('/');
                    $window.location.reload();
            });
        };
    }
)