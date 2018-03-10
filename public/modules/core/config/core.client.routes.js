angular.module('core').config([
    '$locationProvider',
    '$urlRouterProvider',
    function( $locationProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise('/');
    }
]);