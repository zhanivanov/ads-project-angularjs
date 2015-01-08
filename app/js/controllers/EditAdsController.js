'use strict';

adsApp.controller('EditAdsController',
    function EditAdsController($scope, $rootScope, $location, authService, notifications, session, $filter){

        $scope.approve = approve;
        $scope.reject = reject;
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
            $scope.adInfo.ownerUsername = data.ownerUsername;
            $scope.adInfo.status = data.status;
            $scope.adInfo.formattedDate = formatDate(data.date);
            $scope.adInfo.changeImage = false;
            $rootScope.data = undefined;
        }

        function formatDate(input){
            var date = $filter('date')(input, "MM/dd/yyyy");
            var splitted = date.split(/\//);
            var day = splitted[1];
            var month = splitted[0];
            var year = splitted[2];

            return month + '/' + day + '/' + year;
        }

        function approve(ad){
            authService.authorizedRequest(
                'PUT',
                'ads/approve/' + ad.id,
                null,
                function(data){
                    ad.status = "Published";
                    notifications.info("You approved the ad successfully.");
                },
                function(error){
                    console.log(error);
                }
            )
        }

        function reject(ad){
            authService.authorizedRequest(
                'PUT',
                'ads/reject/' + ad.id,
                null,
                function(data){
                    ad.status = "Rejected";
                    notifications.error("You rejected the ad successfully.");
                },
                function(error){
                    console.log(error);
                }
            )
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
                    if(session.isAdmin()){
                        $location.path('/admin/editad');
                    } else{
                        $location.path('/editad');
                    }
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

        function edit(adInfo, date){
            var pathUrl = '/myads';
            if(adInfo.imageDataUrl != null && adInfo.imageDataUrl != undefined) {
                if (!(adInfo.imageDataUrl).localeCompare('../app/img/no-available-image.png')) {
                    adInfo.imageDataUrl = null;
                }
            }
            if(session.isAdmin()){
                adInfo.date = new Date(adInfo.formattedDate);
                adInfo.date.setDate(adInfo.date.getDate() + 1);
                delete adInfo["formattedDate"];
                pathUrl = '/admin/home';
            }
            authService.authorizedRequest(
                'PUT',
                'ads/' + adInfo.id,
                adInfo,
                function(data){
                    notifications.success("Ad edited successfully!");
                    $location.path(pathUrl);
                },
                function(error){
                    console.log(error);
                }
            )
        }
});