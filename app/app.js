/**
 * Created by Humberto Machado on 25/12/2015.
 */
'use strict';
angular.module('nomesApp', ['ngMaterial', 'firebase', 'ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'lista-nomes-view/lista-nomes-view.html'
        });
        $routeProvider.otherwise({
           redirectTo: '/'
        });
    }]);