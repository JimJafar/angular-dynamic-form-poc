(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('paragraphBlock', paragraphBlock);

    function paragraphBlock() {
        return {
            restrict: 'E',
            templateUrl: 'app/widgets/paragraph-block.html',
            controller: 'ParagraphBlockController',
            controllerAs: 'paragraphBlockCtrl',
            scope: { definition: '&' }
        };
    }
})();
