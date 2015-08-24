(function () {
    'use strict';

    angular
        .module('app.widgets')
        .directive('dynamicForm', dynamicForm);

    function dynamicForm() {
        return {
            restrict: 'E',
            templateUrl: 'app/widgets/dynamic-form.html',
            controller: 'DynamicFormController',
            controllerAs: 'dynamicFormCtrl',
            scope: { formData: '&' }
        };
    }
})();
