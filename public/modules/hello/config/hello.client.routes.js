angular.module('hello').config([
    '$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('hello', {
                url: '/',
                templateUrl: '/modules/hello/views/hello.client.view.jade'
            });
}]);