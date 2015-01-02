adsApp
    .factory('authFilter', function ($location, session) {
        return function () {
            if (!session.isAuthenticated()) {
                $location.path('/login');
                return false;
            }
            return true;
        };
    });