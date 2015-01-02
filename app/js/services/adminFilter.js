adsApp
    .factory('adminFilter', function ($location, session) {
        return function () {
            if (!session.isAdmin()) {
                $location.path('/login');
                return false;
            }
            return true;
        };
    });