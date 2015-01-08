'use strict';

adsApp.controller('SortByController',
    function SortByController($scope, $rootScope){
        $scope.sortBy = 'Date';

        $scope.setSortBy = function(sortExp){
            $scope.sortBy = sortExp;
            $rootScope.$broadcast('sortBy', sortExp);
        }
    }
)