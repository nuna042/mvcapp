angular.module('users').factory('Auth', [
    function() {
        return {
            user:  window.user
        };
    }
]);