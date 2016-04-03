import {NomesServices} from "./NomesServices";
import IDialogService = angular.material.IDialogService;
import {DialogController} from "./DialogsController";
///<reference path="../../../typings/browser.d.ts"/>
// declare var $mdDialog: any;
/**
 * Created by beto_ on 31/03/2016.
 */
export class NomesController {
    static IID = "NomesController";

    public name: string = '';
    public pesquisar: string = '';
    public showAdd: boolean = false;
    public showSearch: boolean = false;
    public nomes: any = [];
    public sobrenome: string = "";
    public nomeEdit: string;
    private nomesService: NomesServices;
    private $mdDialog: any;

    static $inject = ['$mdDialog', NomesServices.IID];
    constructor($mdDialog: any, nomesService : NomesServices){
        this.nomesService = nomesService;
        this.$mdDialog = $mdDialog;
        this.fetchNomes();
    }

    public fetchNomes(): void{
        this.nomes = this.nomesService.list();
    }

    public getFamiliaClass(sobrenome : any) : string {
        if(sobrenome == 'Machado')
            return 'machados';
        else if(sobrenome == 'Costa')
            return 'costas';
        else
            return 'outros';
    }

    public mostraSobrenome(sobrenome: string) : void{
        this.sobrenome = sobrenome;
    };

    public addNome(): void{
        this.nomesService.add({nome: this.name, sobrenome: this.sobrenome});
        this.name = '';
        this.sobrenome = '';
    }

    public deleteNome(nome: string): void{
        this.nomesService.delete(nome);
    }

    public showAddField() : void{
        this.showAdd = !this.showAdd;
    };

    public showSearchField(): void{
        this.showSearch = !this.showSearch;
    };

    public showEdit($event: any, nome: string): void {
        this.nomeEdit = nome;
        var parentEl = angular.element(document.body);
        this.$mdDialog.show({
            parent: parentEl,
            targetEvent: $event,
            templateUrl: 'components/crud-nomes/dialog-edit.tmpl.html',
            controller: DialogController,
            controllerAs: 'c',
            clickOutsideToClose: false,
            locals: {
                items: this.nomeEdit
            }
        });
    }
}
