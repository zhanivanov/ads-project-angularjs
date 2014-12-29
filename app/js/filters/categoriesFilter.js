'use strict';

adsApp.filter('categoriesFilter', function(){
    return function(value, categoryId){
        //console.log(categoryId);
        var result = [];
        if(categoryId === undefined){
            return value;
        }
        for(var i = 0; i < value.length; i++){
            if(value[i].categoryId === categoryId){
                result.push(value[i]);
            }
        }

        return result;
    }
})