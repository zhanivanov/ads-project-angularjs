'use strict';

adsApp.filter('status',function(){
    return function(input, id){
        var element = $('#' + id + ' .panel');
        var deactivateBtn = $('#' + id + ' .warning');
        var editBtns = [
            $('#' + id + ' .primary'),
            $('#' + id + ' .success'),
            $('#' + id + ' .danger')
        ];
        switch (input){
            case "WaitingApproval":
                element.removeClass("panel-danger").addClass("panel-warning");
                deactivateBtn.removeClass('not-display').addClass('display');
                editBtns.forEach(function(btn){
                    btn.removeClass('display').addClass('not-display');
                });
                return "Waiting Approval";
            case "Inactive":
                element.removeClass("panel-warning").addClass("panel-danger");
                deactivateBtn.removeClass('display').addClass('not-display');
                editBtns.forEach(function(btn){
                    btn.removeClass('not-display').addClass('display');
                });
                return "Inactive";
            case "Published":
                element.addClass("panel-success");
                deactivateBtn.removeClass('not-display').addClass('display');
                return "Published";
        }
    }
});