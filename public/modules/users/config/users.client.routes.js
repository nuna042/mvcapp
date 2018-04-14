angular.module('users').config([
    '$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl:  '/modules/users/views/login.client.view.jade'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: '/modules/users/views/signup.client.view.jade'
            });
    }
]);