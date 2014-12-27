'use strict';

adsApp.controller('LoginController',
    function LoginController($scope, authService, $location, $window, growl){
        $scope.credentials = {
            username: '',
            password: ''
        };
        $scope.login = function (credentials) {
            authService.login(credentials)
                .then(function (user) {
                    growl.success("Succesful login!");
                    //$location.path('/');
                    //$window.location.reload();
            },
            function(error){
                growl.error(error.errorText);
            });
        };
    }
)