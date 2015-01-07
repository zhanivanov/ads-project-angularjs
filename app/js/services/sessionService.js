'use strict';

adsApp.service('session', function ($cookieStore) {
    return{
        create: function(access_token, username, isAdmin){
            $cookieStore.put('access_token', access_token);
            $cookieStore.put('username', username);
            if(isAdmin) {
                $cookieStore.put('isAdmin', isAdmin)
            }
        },
        get: function(){
            return {access_token: $cookieStore.get('access_token'), username: $cookieStore.get('username')};
        },
        isAuthenticated: function(){
            return $cookieStore.get('access_token') != undefined && $cookieStore.get('username') != undefined;
        },
        isAdmin: function(){
            return $cookieStore.get('isAdmin');
        },
        destroy: function(){
            $cookieStore.remove('access_token');
            $cookieStore.remove('username');
            $cookieStore.remove('isAdmin');
        }
    }
})