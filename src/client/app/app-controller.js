(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$log', '$scope', '$http'];
    function AppController($log, $scope, $http) {
        /*jshint validthis:true */
        var appCtrl = this;
        appCtrl.data = {};
        appCtrl.datafiles = [
            { name: 'one', filename: 'example-one.json' },
            { name: 'two', filename: 'example-two.json' }
        ];
        appCtrl.datafile = appCtrl.datafiles[0];

        initialise();
        function initialise() {
            $scope.$watch('appCtrl.datafile', loadData);
            loadData();
        }

        function loadData() {
            $http.get('/src/client/app/data/' + appCtrl.datafile.filename).success(function(data) {
                appCtrl.data = data;
            });
        }
    }
})();
