'use strict';

adsApp.controller('MainAppController',
    function MainAppController($scope, session, $rootScope, notifications, $window, $location){
        var validatedInputs = [];
        $rootScope.$on("userLoggedOrRegistered", function(){
            $scope.isAdmin = session.isAdmin();
            $scope.currentUser = session.get();
        });

        $rootScope.$on("loggedOut", function(){
            $scope.isAdmin = undefined;
            $scope.currentUser = undefined;
        });

        $scope.isAdmin = session.isAdmin();
        $scope.currentUser = session.get();

        $scope.routeChecker = routeChecker;
        $scope.routeChanger = function(){
            var currRoute = ($window.location.hash).split(/#\/(.+)/)[1];
            if(!currRoute){
                currRoute = '';
            }
            if(session.isAdmin()){
                $location.path('/admin/' + currRoute);
            }
        };
        $scope.routeChanger();

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

        function setTownId(townId){
            $rootScope.$broadcast('townClicked', townId);

            var selector = '#town-' + townId;
            $('.towns').children().removeClass('active');
            $(selector).addClass('active');
        }

        function setCategoryId(categoryId){
            $rootScope.$broadcast('categoryClicked', categoryId);

            var selector = '#category-' + categoryId;
            $('.categories').children().removeClass('active');
            $(selector).addClass('active');
        }

        function routeChecker(){
            var route = $window.location.hash;
            if(!(route.localeCompare('#/'))){
                $('#home').addClass('active');
            } else if(!(route.localeCompare('#/myads'))){
                $scope.status = undefined;
                $('#myads').addClass('active');
            } else if(!(route.localeCompare('#/addnewad'))){
                $('#addnewad').addClass('active');
            } else{
                $('#profile').addClass('active');
            }
        }

        $scope.status = "undefined";

        $scope.changeStatus = function(status) {
            $scope.status = status;

            var selector = '#' + status;
            $('.myads').children().removeClass('active');
            $(selector).addClass('active');
        }
    }
)