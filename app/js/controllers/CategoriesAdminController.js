'use strict';

adsApp.controller('CategoriesAdminController',
    function CategoriesAdminController($scope, categoriesDataSrvc, $rootScope, $location, authService, notifications) {
        var pageSize = 10;
        var startPage = 1;
        var sortByValue = 'Id';
        var oldSortValue = 'Id';

        $scope.sortBy = sortBy;
        $scope.confirmDeleteCategory = confirmDeleteCategory;
        $scope.goToEdit = goToEdit;
        $scope.createCategory = createCategory;
        $scope.editCategory = editCategory;

        $rootScope.$$listeners.pageChange = [];
        $rootScope.$on('pageChange', function (event, page) {
            startPage = page;
            $scope.getCategories();
        });

        $rootScope.$on('adsPerPage', function (event, users) {
            pageSize = users;
            $scope.getCategories();
        });

        $scope.$on('sendNumPages', function (event, numPages) {
            $rootScope.$broadcast('setNumPages', numPages);
        });

        $scope.getCategories = function () {
            categoriesDataSrvc.getAll(pageSize, startPage, sortByValue)
                .then(function (data) {
                    $scope.$emit('sendNumPages', data.numPages);
                    $scope.categories = data.categories;
                })
        }

        function editCategory(categoryInfo){
            var data = { name: categoryInfo.username };
            authService.authorizedRequest(
                'PUT',
                'categories/' + categoryInfo.id,
                data,
                function(data){
                    $location.path('admin/categories');
                    notifications.success("Successfully edited the category.")
                },
                function(error){
                    console.log(error);
                }
            )
        }

        $scope.categoryInfo = $rootScope.categoryInfo;
        console.log($rootScope.categoryInfo);
        delete $rootScope.categoryInfo;

        function goToEdit(category){
            $location.path('/admin/categories/edit');
            $rootScope.categoryInfo = category;
        }

        function confirmDeleteCategory(category){
            $rootScope.$emit('confirmDeleteCategory', category);
        }

        function createCategory(categoryInfo){
            authService.authorizedRequest(
                'POST',
                'categories/',
                categoryInfo,
                function(data){
                    $location.path('admin/categories');
                    notifications.success("Successfully created the category.")
                },
                function(error){
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
            $scope.getCategories();
        }
    }
)