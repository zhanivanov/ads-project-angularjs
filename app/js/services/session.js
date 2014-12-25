'use strict';

adsApp.service('session', function ($cookieStore) {
    return{
        create: function(access_token, username){
            $cookieStore.put('access_token', access_token);
            $cookieStore.put('username', username);
        },
        get: function(){
            return {access_token: $cookieStore.get('access_token'), username: $cookieStore.get('username')};
        },
        destroy: function(){
            $cookieStore.remove('access_token');
            $cookieStore.remove('username');
        }
    }
})