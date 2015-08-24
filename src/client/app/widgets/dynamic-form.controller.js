(function () {
    'use strict';

    angular
        .module('app.widgets')
        .controller('DynamicFormController', DynamicFormController);

    DynamicFormController.$inject = ['$log', '$scope'];
    function DynamicFormController($log, $scope) {
        /*jshint validthis:true */
        var dynamicFormCtrl = this;

        dynamicFormCtrl.response = {};

        $scope.$watch('dynamicFormCtrl.response', function(newVal) {
            $log.log('response updated: ', newVal);
        }, true);
    }
})();
