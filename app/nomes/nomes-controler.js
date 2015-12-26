/**
 * Created by Humberto Machado on 25/12/2015.
 */
'use strict';

angular.module('nomesApp')
.controller('NomesController', ['NomesService', '$http', function(NomesService, $http) {
    var self = this;
    self.name = '';
    self.pesquisar = '';
    self.showAdd = false;
    self.showSearch = false;

    var fetchNomes = function(){
        //NomesService.list().then(function(response){
        //    self.nomes = response.data;
        //    console.log(self.nomes);
        //}, function(error){
        //    console.log(error);
        //});
        self.nomes = NomesService.list();
    }
    fetchNomes();

    self.getFamiliaClass = function(sobrenome){
        if(sobrenome == 'Machado')
            return 'machados';
        else if(sobrenome == 'Costa')
            return 'costas';
        else
            return 'outros'
    }

    self.mostraSobrenome = function(sobrenome){
        self.sobrenome = sobrenome;
    }

    self.addNome = function(){
        var nome = {nome: self.name, sobrenome: self.sobrenome}
        NomesService.add(nome);
        self.name = '';
        self.sobrenome = '';
    }

    self.deleteNome = function(nome){
        NomesService.delete(nome);
    }

    self.showAddF = function(){
        self.showAdd = !self.showAdd;
    }

    self.showSearchF = function(){
        self.showSearch = !self.showSearch;
    }

}]);