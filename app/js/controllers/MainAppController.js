'use strict';

adsApp.controller('MainAppController',
    function MainAppController($scope, session, growl){
        $scope.currentUser = session.get();

        $scope.nameRegex = /^[A-z ,.'-]+$/;
        $scope.phoneRegex = /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
        $scope.usernameRegex = /^[A-z0-9_-]{3,16}$/;
        $scope.passwordRegex = /^[A-z0-9_-]{6,18}$/;


        $scope.isValid = isValid;
        $scope.verifyPassword = verifyPassword;
        $scope.disabled = 'disabled';


        function isValid(isValid, name){
            console.log(isValid);
            if(isValid){
                $scope['valid' + capitaliseFirstLetter(name)] = 'has-success';
            } else{
                $scope['valid' + capitaliseFirstLetter(name)] = 'has-error';
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
                growl.error("Passwords must be identical!");
                $scope.disabled = 'disabled';
            }
            else{
                $scope.validPassword = 'has-success';
                $scope.validConfirmPassword = 'has-success';
                $scope.disabled = '';
            }
        }
    }
)