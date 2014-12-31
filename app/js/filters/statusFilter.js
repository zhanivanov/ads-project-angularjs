'use strict';

adsApp.filter('statusFilter', function(){
    return function(value, status){
        //console.log(categoryId);
        var result = [];
        if(status === undefined || value == undefined){
            return value;
        }
        for(var i = 0; i < value.length; i++){
            if(value[i].status === status){
                result.push(value[i]);
            }
        }

        return result;
    }
})