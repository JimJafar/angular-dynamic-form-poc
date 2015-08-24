(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('textInputBlock', textInputBlock);

    function textInputBlock() {
        return {
            restrict: 'E',
            templateUrl: 'app/widgets/text-input-block.html',
            controller: 'TextInputBlockController',
            controllerAs: 'textInputBlockCtrl',
            scope: { definition: '&', response: '=' }
        };
    }
})();
