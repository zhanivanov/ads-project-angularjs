'use strict';

adsApp.controller('UsersController',
    function UsersController($scope, usersDataSrvc, $rootScope, $location) {
        var pageSize = 10;
        var startPage = 1;
        var sortByValue = 'UserName';
        var oldSortValue = 'UserName';

        $scope.sortBy = sortBy;
        $scope.confirmDeleteUser = confirmDeleteUser;
        $scope.goToEdit = goToEdit;

        $rootScope.$$listeners.pageChange = [];
        $rootScope.$on('pageChange', function (event, page) {
            startPage = page;
            $scope.getUsers();
        });

        $rootScope.$on('adsPerPage', function (event, users) {
            pageSize = users;
            $scope.getUsers();
        });

        $scope.$on('sendNumPages', function (event, numPages) {
            $rootScope.$broadcast('setNumPages', numPages);
        });

        $scope.getUsers = function () {
            usersDataSrvc.getAll(pageSize, startPage, sortByValue)
                .then(function (data) {
                    $scope.$emit('sendNumPages', data.numPages);
                    $scope.users = data.users;
                })
        };

        function goToEdit(user){
            $rootScope.user = user;
            $location.path('/admin/users/edit');
        }

        function confirmDeleteUser(user){
            $rootScope.$emit('confirmDeleteUser', user);
        }

        function sortBy(value){
            $('.sortBy').text('');
            sortByValue = value;
            if(!sortByValue.localeCompare(oldSortValue)){
                sortByValue = '-' + sortByValue;
                oldSortValue = '';
                $(event.target).find('span').text('▼');
            } else{
                $(event.target).find('span').text('▲');
                oldSortValue = value;
            }
        }
    }
)