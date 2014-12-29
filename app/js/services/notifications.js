'use strict';

adsApp.factory('notifications', function(){
    var timeout = 2000;

        var showSuccessMsg = function(msg){
            noty({
                    theme: 'relax',
                    text: msg,
                    type: 'success',
                    layout: 'bottom',
                    timeout: timeout}
            );
        };

        var showErrorMsg = function(msg){
            noty({
                    theme: 'relax',
                    text: msg,
                    type: 'error',
                    layout: 'bottom',
                    timeout: timeout}
            );
        };

        var showInfoMsg = function(msg){
            noty({
                    theme: 'relax',
                    text: msg,
                    type: 'information',
                    layout: 'bottom',
                    timeout: timeout}
            );
        };

        return{
            success: showSuccessMsg,
            error: showErrorMsg,
            info: showInfoMsg
        }
})