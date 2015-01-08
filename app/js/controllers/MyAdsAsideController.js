'use strict';

adsApp.controller('MyAdsAsideController',
    function MyAdsAsideController($scope, authService, notifications, $rootScope, $location){

        $scope.changeStatus = function(status) {
            if(!status.localeCompare('All')){
                status = '';
            }

            $rootScope.$emit('statusChanged', status);
            
            var selector = '#status-' + status;
            $('.myads').children().removeClass('active');
            $(selector).addClass('active');
        }
    }
)