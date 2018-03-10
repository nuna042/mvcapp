var mainAppModuleName = 'Main';
var mainAppModule = angular.module(mainAppModuleName, ['ui.router','core', 'hello']);

angular.element(document).ready(function() {
    angular.bootstrap(document.querySelector('#mainApp'), [mainAppModuleName], {
        strictDi: true
    });
});