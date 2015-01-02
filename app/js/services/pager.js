'use strict';

adsApp.service('pager', function () {
    return{
        draw: function(numPages){
            var pagination = $('.pagination');
            pagination.append('<li class="disabled"><a href="">«</a></li>');
            for(var i = 1; i <= numPages; i++){
                var li = "<li id=\"page-" + i + "\" ng-click=\"setPageId(" + i + ")\"><a href=\"\">" + i + "</a></li>";
                pagination.append(li);
            }
            pagination.append('<li><a href="">»</a></li>');
        }
    }
});