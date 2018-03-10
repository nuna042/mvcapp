angular.module('hello').config([
    '$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('hello', {
                url: '/',
                templateUrl: '/modules/hello/views/hello.client.view.jade'
            })
            .state('nohello', {
                url: '/nohello',
                template: '<a ui-sref="hello"> Back to hello state</a>'
            });
}]);