/**
 * Created by Humberto Machado on 25/12/2015.
 */
'use strict';

angular.module('nomesApp')
.controller('NomesController', ['NomesService', '$http', '$mdDialog', function(nomesService, $http, $mdDialog) {
    var self = this;
    self.name = '';
    self.pesquisar = '';
    self.showAdd = false;
    self.showSearch = false;
    self.nomes = [];

    var fetchNomes = function(){
        self.nomes = nomesService.list();
    };
    fetchNomes();

    self.getFamiliaClass = function(sobrenome){
        if(sobrenome == 'Machado')
            return 'machados';
        else if(sobrenome == 'Costa')
            return 'costas';
        else
            return 'outros';
    };

    self.mostraSobrenome = function(sobrenome){
        self.sobrenome = sobrenome;
    };

    self.addNome = function(){
        var nome = {nome: self.name, sobrenome: self.sobrenome}
        nomesService.add(nome);
        self.name = '';
        self.sobrenome = '';
    };

    self.deleteNome = function(nome){
        nomesService.delete(nome);
    };

    self.showAddField = function(){
        self.showAdd = !self.showAdd;
    };

    self.showSearchField = function(){
        self.showSearch = !self.showSearch;
    };

    self.showEdit = function($event, nome) {
        self.nomeEdit = nome;
        var parentEl = angular.element(document.body);
        $mdDialog.show({
            parent: parentEl,
            targetEvent: $event,
            templateUrl: 'components/crud-nomes/dialog-edit.tmpl.html',
            controller: ['$scope', '$mdDialog','NomesService', 'items', DialogController],
            clickOutsideToClose:false,
            locals: {
                    items: self.nomeEdit
            }
        });
    };
}]);

function DialogController($scope, $mdDialog, nomesService, items) {
    $scope.nomeEdit = items;
    $scope.closeDialog = function() {
        $mdDialog.hide();
    }
    $scope.editAndClose = function() {
        nomesService.edit($scope.nomeEdit);
        $mdDialog.hide();
    }
}
