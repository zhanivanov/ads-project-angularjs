'use strict';

adsApp.controller('UploadController',
    function UploadController($scope, fileReader, $rootScope){
        $scope.getFile = function () {
            fileReader.readAsDataUrl($scope.file, $scope)
                .then(function(result) {
                    if(/^data:image\/.*$/.test(result)){
                        $scope.imageSrc = result;
                        $rootScope.imgSrc = result;
                        $scope.imageName = $('#inputImage').val();
                        $scope.isValidImg = 'has-success';
                    } else{
                        $scope.imageSrc = "../app/img/no-available-image.png";
                        $scope.imageName = "Invalid image.";
                        $scope.isValidImg = 'has-error';
                    }
                });
        };
    }
)