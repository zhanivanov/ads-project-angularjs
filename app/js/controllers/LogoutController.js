'use strict';

adsApp.controller('LogoutController',
    function LogoutController($scope, session, $location){
        $scope.logout = logout;


        function logout(){
            session.destroy();
            $location.path('/');
            window.location.reload();
        }
    }
)