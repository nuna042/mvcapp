var mainAppModuleName = 'Main';
var mainAppModule = angular.module(mainAppModuleName, ['ui.router','core', 'users']);

angular.element(document).ready(function() {
    angular.bootstrap(document.querySelector('#mainApp'), [mainAppModuleName], {
        strictDi: true
    });
});