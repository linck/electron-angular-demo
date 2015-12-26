/**
 * Created by beto_ on 25/12/2015.
 */
'use strict';

angular.module('nomesApp')
.factory('NomesService', ['$http', '$firebaseArray', function($http, $firebaseArray){

    var ref  = new Firebase("https://angular-demo-bhask.firebaseIO.com");
    var nomes = $firebaseArray(ref);

    return{
        list: function() {
            return nomes;
        },
        add: function(nomeObj){
            nomes.$add(nomeObj);
        },
        delete: function(nomeObj){
            nomes.$remove(nomeObj);
        }

    }
}]);
