(function () {
    'use strict';

    angular
        .module('myapp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        var vm = this;
        vm.scriptsHtml = "1";
        vm.pageName = 'index page loaded!';
        vm.scripts = 'views/bootstrap-scripts.html';
        vm.themeSelectChange = function (ev) {
            switch (vm.scriptsHtml) {
                case '1':
                    vm.scripts = 'views/bootstrap-scripts.html';
                    break;
                case '2':
                    vm.scripts = 'views/ng-material-scripts.html';
                    break;
                default:
                    break;
            }
        }
    }
})();