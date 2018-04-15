angular.module('users').controller('AuthController', [
    '$scope',
    '$http',
    '$state',
    'Auth',
    function($scope, $http, $state, Auth) {
        $scope.auth = Auth;
        
        $scope.signup = function(isValid) {
            if(isValid) {
                $http.post('/signup', $scope.user)
                .success(function(response) {
                    $state.go('home');
                })
                .error(function(response) {
                    $scope.error = response.message;
                });
            }
        };

        $scope.login = function(isValid) {
            if(isValid) {
                $http.post('/login', $scope.user)
                .success(function(response) {
                    $state.go('home');
                })
                .error(function(response) {
                    $scope.error = response.message;
                });
            }
        };
    }
]);