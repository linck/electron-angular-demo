/**
 * Created by beto_ on 23/01/2016.
 */
'use restrict'

angular.module('nomesApp')
    .directive('crudNomes', [function() {
        return {
            templateUrl: 'components/crud-nomes/crud-nomes.html',
            restrict: 'AE'
        };
    }]);