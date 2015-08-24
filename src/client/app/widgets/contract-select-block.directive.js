(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('contractSelectBlock', contractSelectBlock);

    function contractSelectBlock() {
        return {
            restrict: 'E',
            templateUrl: 'app/widgets/contract-select-block.html',
            controller: 'ContractSelectBlockController',
            controllerAs: 'contractSelectBlockCtrl',
            scope: { definition: '&', response: '=' }
        };
    }
})();
