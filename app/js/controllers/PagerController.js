'use strict';

adsApp.controller('PagerController',
    function PagerController($scope, $rootScope){


        $rootScope.$on('setNumPages', function(event, numPages){
            $scope.numPages = numPages;
        });

        $scope.getPages = function(num) {
            return new Array(num);
        };

        $scope.setPageId = setPage;
        $scope.currentPage = 1;

        function setPage(pageId, nextPage){
            if(nextPage != undefined){
                if(nextPage){
                    if($scope.currentPage == $scope.numPages){
                        $('#last').addClass('disabled');
                        return;
                    } else{
                        $('#last').removeClass('disabled');
                    }
                    pageId = $scope.currentPage + 1;
                }else{
                    if($scope.currentPage == 1){
                        $('#first').addClass('disabled');
                        return;
                    } else{
                        $('#first').removeClass('disabled');
                    }
                    pageId = $scope.currentPage - 1;
                }
            }
            $scope.currentPage = pageId;
            $rootScope.$emit('pageChange', pageId);

            var selector = '#page-' + pageId;
            $('.pagination').children().removeClass('active');
            $(selector).addClass('active');
        }
    }
);