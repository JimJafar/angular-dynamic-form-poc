(function () {
    'use strict';

    angular
        .module('app.widgets')
        .controller('TextInputBlockController', TextInputBlockController);

    TextInputBlockController.$inject = ['$log'];
    function TextInputBlockController($log) {
        /*jshint validthis:true */
        var textInputBlockCtrl = this;
    }
})();
