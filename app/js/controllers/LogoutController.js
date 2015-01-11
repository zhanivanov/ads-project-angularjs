'use strict';

adsApp.controller('LogoutController',
    function LogoutController($scope, session, $location, $rootScope, notifications, authService){
        $scope.logout = logout;


        function logout(){
            authService.logout(function(data){
                $location.path('/');
                session.destroy();
                $rootScope.$broadcast("loggedOut");
                notifications.info("Successfully logged out!");
                //window.location.reload();
            },
            function(error){
                notifications.error("Some error occurred!");
                console.log(error);
            })

        }
    }
)