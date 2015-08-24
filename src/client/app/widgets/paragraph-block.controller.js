(function () {
    'use strict';

    angular
        .module('app.widgets')
        .controller('ParagraphBlockController', ParagraphBlockController);

    ParagraphBlockController.$inject = ['$log'];
    function ParagraphBlockController($log) {
        /*jshint validthis:true */
        var paragraphBlockCtrl = this;
    }
})();
