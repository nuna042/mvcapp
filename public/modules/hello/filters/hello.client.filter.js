angular.module('hello').filter('sayhello', function() {
    return function(name) {
        return 'Hello, ' + name;
    };
});