var mainAppModuleName = 'Main';
var mainAppModule = angular.module(mainAppModuleName, ['hello']);

angular.element(document).ready(function() {
    angular.bootstrap(document.querySelector('#mainApp'), [mainAppModuleName], {
        strictDi: true
    });
});

mainAppModule.controller('NameController', ['$scope', function($scope) {
    $scope.yourName = 'No Name';
}]);

mainAppModule.filter('sayhello', function() {
    return function(name) {
        return 'Hello, ' + name;
    };
});