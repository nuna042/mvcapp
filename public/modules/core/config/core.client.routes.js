angular.module('core').config([
    '$locationProvider',
    '$urlRouterProvider',
    '$stateProvider',
    function( $locationProvider, $urlRouterProvider, $stateProvider) {
        $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home', {
            url: '/'
        });
    }
]);