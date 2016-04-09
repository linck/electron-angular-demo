import {NomesServices} from "./components/crud-nomes/NomesServices";
import {NomesController} from "./components/crud-nomes/NomesController";
import {CrudNomesDirective} from "./components/crud-nomes/CrudNomesDirective";
/**
 * Created by beto_ on 01/04/2016.
 */
///<reference path="../typings/browser.d.ts"/>
angular.module('nomesApp', ['ngMaterial', 'firebase', 'ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'lista-nomes-view/lista-nomes-view.html'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);

angular.module('nomesApp')
    .service(NomesServices.IID, NomesServices)
    .controller(NomesController.IID, NomesController)
    .directive(CrudNomesDirective.IID, [CrudNomesDirective]);

angular.bootstrap(document, ['nomesApp']);
console.log("Loaded!");