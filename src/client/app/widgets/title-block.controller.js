(function () {
    'use strict';

    angular
        .module('app.widgets')
        .controller('TitleBlockController', TitleBlockController);

    TitleBlockController.$inject = ['$log'];
    function TitleBlockController($log) {
        /*jshint validthis:true */
        var titleBlockCtrl = this;
    }
})();
