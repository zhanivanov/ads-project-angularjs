'use strict';

adsApp.controller('MainAppController',
    function MainAppController($scope, session, $rootScope, notifications, $window){
        var validatedInputs = [];
        $rootScope.$on("userLoggedOrRegistered", function(){
            $scope.currentUser = session.get();
        });

        $rootScope.$on("loggedOut", function(){
            $scope.currentUser = undefined;
        });

        $scope.currentUser = session.get();
        

        $scope.nameRegex = /^[A-z ,.'-]+$/;
        $scope.phoneRegex = /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
        $scope.usernameRegex = /^[A-z0-9_-]{3,16}$/;
        $scope.passwordRegex = /^[A-z0-9_-]{6,18}$/;


        $scope.isValid = isValid;
        $scope.clearValidatedInputs = clearValidatedInputs;
        $scope.verifyPassword = verifyPassword;
        $scope.disabled = 'disabled';

        $scope.setTownId = setTownId;
        $scope.setCategoryId = setCategoryId;

        function isValid(isValid, name){
            validatedInputs.push('valid' + capitaliseFirstLetter(name));
            if(isValid){
                $scope['valid' + capitaliseFirstLetter(name)] = 'has-success';
            } else{
                $scope['valid' + capitaliseFirstLetter(name)] = 'has-error';
            }
        }

        function clearValidatedInputs(){
            for(var i = 0; i < validatedInputs.length; i++){
                $scope[validatedInputs[i]] = '';
            }
        }

        function capitaliseFirstLetter(string)
        {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        function verifyPassword(passowrd, confirmPassword){
            var result = passowrd.localeCompare(confirmPassword);
            if(result !== 0){
                $scope.validPassword = 'has-error';
                $scope.validConfirmPassword = 'has-error';
                notifications.error("Passwords must be identical!");
                $scope.disabled = 'disabled';
            }
            else{
                $scope.validPassword = 'has-success';
                $scope.validConfirmPassword = 'has-success';
                $scope.disabled = '';
            }
        }

        var prevTown = '';
        function setTownId(townId){
            var townSelector = '#town-' + townId;
            var prevTownSelector = '#town-' + prevTown;

            if($(townSelector).hasClass('active')){
                $(townSelector).removeClass('active');
                $scope.townId = undefined;
            } else{
                if($(prevTownSelector).hasClass('active')){
                    $(prevTownSelector).removeClass('active');
                    $(townSelector).addClass('active');
                    $scope.townId = townId;
                    prevTown = townId;
                } else{
                    $(townSelector).addClass('active');
                    $scope.townId = townId;
                    prevTown = townId;
                }
            }
        }

        var prevCategory = '';
        function setCategoryId(categoryId){
            var categorySelector = '#category-' + categoryId;
            var prevCategorySelector = '#category-' + prevCategory;

            if($(categorySelector).hasClass('active')){
                $(categorySelector).removeClass('active');
                $scope.categoryId = undefined;
            } else{
                if($(prevCategorySelector).hasClass('active')){
                    $(prevCategorySelector).removeClass('active');
                    $(categorySelector).addClass('active');
                    $scope.categoryId = categoryId;
                    prevCategory = categoryId;
                } else{
                    $(categorySelector).addClass('active');
                    $scope.categoryId = categoryId;
                    prevCategory = categoryId;
                }
            }
        }
    }
)