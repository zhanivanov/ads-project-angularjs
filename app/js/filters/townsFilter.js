'use strict';

adsApp.filter('townsFilter', function(){
    return function(value, townId){
        //console.log(categoryId);
        var result = [];
        if(townId === undefined){
            return value;
        }
        for(var i = 0; i < value.length; i++){
            if(value[i].townId === townId){
                result.push(value[i]);
            }
        }

        return result;
    }
});