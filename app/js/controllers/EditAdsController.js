'use strict';

adsApp.controller('EditAdsController',
    function EditAdsController($scope, $rootScope, $location, authService, notifications){

        $scope.deactivate = deactivate;
        $scope.publishAgain = publishAgain;
        $scope.confirmDelete = confirmDelete;
        $scope.getAd = getAd;
        $scope.changeImg = changeImg;
        $scope.deleteImg = deleteImg;
        $scope.edit = edit;
        $scope.adInfo = {};

        if($rootScope.data != undefined){
            var data = $rootScope.data;
            $scope.adInfo.id = data.id;
            $scope.adInfo.title = data.title;
            $scope.adInfo.text = data.text;
            $scope.adInfo.date = data.date;
            $scope.adInfo.imageDataUrl = data.imageDataUrl;
            $scope.adInfo.categoryId = data.categoryId;
            $scope.adInfo.categoryName = data.categoryName;
            $scope.adInfo.townId = data.townId;
            $scope.adInfo.townName = data.townName;
            $scope.adInfo.changeImage = false;
        }


        function deactivate(ad){
            authService.authorizedRequest(
                'PUT',
                'ads/deactivate/' + ad.id,
                null,
                function(data){
                    ad.status = "Inactive";
                    notifications.info("Successfully deactivated the ad.")
                },
                function(error){
                    console.log(error);
                }
            )
        }

        function publishAgain(ad){
            authService.authorizedRequest(
                'PUT',
                'ads/publishagain/' + ad.id,
                null,
                function(data){
                    ad.status = "WaitingApproval";
                    notifications.success("Successfully published the ad.")
                },
                function(error){
                    console.log(error);
                }
            )
        }

        function confirmDelete(ad){
            $rootScope.$emit('confirmDelete', ad);
        }

        function getAd(id){
            authService.authorizedRequest(
                'GET',
                'ads/' + id,
                null,
                function(data){
                    $rootScope.data = data;
                    $location.path('/editad');
                },
                function(error){
                    console.log(error);
                }
            )
        }

        function changeImg(imageSrc){
            $scope.adInfo.imageDataUrl = imageSrc;
            $scope.adInfo.changeImage = true;
        }

        function deleteImg(){
            $scope.adInfo.imageDataUrl = '../app/img/no-available-image.png';
            $scope.adInfo.changeImage = true;
        }

        function edit(adInfo){
            if(adInfo.imageDataUrl != null && adInfo.imageDataUrl != undefined) {
                if (!(adInfo.imageDataUrl).localeCompare('../app/img/no-available-image.png')) {
                    adInfo.imageDataUrl = null;
                }
            }
            authService.authorizedRequest(
                'PUT',
                'ads/' + adInfo.id,
                adInfo,
                function(data){
                    notifications.success("Ad edited successfully!");
                    $location.path('/myads');
                },
                function(error){
                    console.log(error);
                }
            )
        }
});