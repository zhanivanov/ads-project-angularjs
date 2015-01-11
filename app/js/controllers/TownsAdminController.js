'use strict';

adsApp.controller('TownsAdminController',
    function TownsAdminController($scope, townsData, $rootScope, $location, authService, notifications) {
        var pageSize = 10;
        var startPage = 1;
        var sortByValue = 'Id';
        var oldSortValue = 'Id';

        $scope.sortBy = sortBy;
        $scope.confirmDeleteTown = confirmDeleteTown;
        $scope.goToEdit = goToEdit;
        $scope.createTown = createTown;
        $scope.editTown = editTown;

        $rootScope.$$listeners.pageChange = [];
        $rootScope.$on('pageChange', function (event, page) {
            startPage = page;
            $scope.getTowns();
        });

        $rootScope.$on('adsPerPage', function (event, users) {
            pageSize = users;
            $scope.getTowns();
        });

        $scope.$on('sendNumPages', function (event, numPages) {
            $rootScope.$broadcast('setNumPages', numPages);
        });

        $scope.getTowns = function () {
            townsData.getAllWithSort(pageSize, startPage, sortByValue)
                .then(function (data) {
                    $scope.$emit('sendNumPages', data.numPages);
                    $scope.towns = data.towns;
                })
        }

        function editTown(townInfo){
            var data = { name: townInfo.username };
            authService.authorizedRequest(
                'PUT',
                'towns/' + townInfo.id,
                data,
                function(data){
                    $location.path('admin/towns');
                    notifications.success("Successfully edited the town.")
                },
                function(error){
                    notifications.error("Some error occurred!");
                    console.log(error);
                }
            )
        }

        $scope.townInfo = $rootScope.townInfo;
        delete $rootScope.townInfo;

        function goToEdit(town){
            $location.path('/admin/towns/edit');
            $rootScope.townInfo = town;
        }

        function confirmDeleteTown(town){
            $rootScope.$emit('confirmDeleteTown', town);
        }

        function createTown(townInfo){
            authService.authorizedRequest(
                'POST',
                'towns/',
                townInfo,
                function(data){
                    $location.path('admin/towns');
                    notifications.success("Successfully created the town.")
                },
                function(error){
                    notifications.error("Some error occurred!");
                    console.log(error);
                }
            )
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
            $scope.getTowns();
        }
    }
)