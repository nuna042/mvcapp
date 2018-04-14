angular.module('users').controller('AuthController', [
    '$scope',
    function($scope) {
        $scope.signup = function(isValid) {
            if(isValid) {
                alert('Ready to send signup request');
            }
        };

        $scope.login = function(isValid) {
            if(isValid) {
                alert('Ready to send login request');
            }
        };
    }
]);