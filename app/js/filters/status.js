'use strict';

adsApp.filter('status',function(){
    return function(input, id){
        var element = $('#' + id + ' .panel');
        var deactivateBtn = $('#' + id + ' .btn-warning');
        var editBtns = [
            $('#' + id + ' .btn-primary'),
            $('#' + id + ' .btn-success'),
            $('#' + id + ' .btn-danger')
        ];
        switch (input){
            case "WaitingApproval":
                element.addClass("panel-warning");
                deactivateBtn.removeClass('not-display').addClass('display');
                return "Waiting Approval";
            case "Inactive":
                element.addClass("panel-danger");
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