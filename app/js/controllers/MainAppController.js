'use strict';

adsApp.controller('MainAppController',
    function MainAppController($scope, session){
            $scope.currentUser = session.get();
    }
)