(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('titleBlock', titleBlock);

    function titleBlock() {
        return {
            restrict: 'E',
            templateUrl: 'app/widgets/title-block.html',
            controller: 'TitleBlockController',
            controllerAs: 'titleBlockCtrl',
            scope: { definition: '&' }
        };
    }
})();
