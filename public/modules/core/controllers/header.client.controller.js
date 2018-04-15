angular.module('core').controller('HeaderController', [
    '$scope',
    'Auth',
    function($scope, Auth) {
        $scope.auth = Auth;
    }
]);