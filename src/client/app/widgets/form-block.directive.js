(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('formBlock', formBlock);

    formBlock.$inject = ['$compile'];
    function formBlock($compile) {
        return {
            restrict: 'E',
            scope: { response: '=', definition: '&' },
            link: linkFunc
        };

        function linkFunc(scope, element) {
            element.html(getTemplate(scope.definition().type)).show();
            $compile(element.contents())(scope);
        }

        function getTemplate(blockType) {
            var titleBlockTemplate = '<title-block data-definition="definition()"></title-block>';
            var contractSelectTemplate = '<contract-select-block data-definition="definition()" data-response="response"></contract-select-block>';
            var paragraphTemplate = '<paragraph-block data-definition="definition()"></paragraph-block>';
            var textInputTemplate = '<text-input-block data-definition="definition()" data-response="response"></text-input-block>';

            var template = '';

            switch (blockType) {
                case 'TitleBlock':
                    template = titleBlockTemplate;
                    break;
                case 'ParagraphBlock':
                    template = paragraphTemplate;
                    break;
                case 'ContractSelectBlock':
                    template = contractSelectTemplate;
                    break;
                case 'TextInputBlock':
                    template = textInputTemplate;
                    break;
            }

            return template + '<hr/>';
        }
    }
})();
