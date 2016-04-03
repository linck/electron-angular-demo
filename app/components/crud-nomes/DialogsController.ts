import {NomesServices} from "./NomesServices";
/**
 * Created by beto_ on 02/04/2016.
 */
export class DialogController {
    public nomeEdit: any;
    public $mdDialog: any;
    public nomesService: NomesServices;
    public closeFunction: Function;


    static $inject = ['$mdDialog', NomesServices.IID, 'items'];
    constructor( $mdDialog, nomesService, items) {
        this.nomeEdit = items;
        this.$mdDialog = $mdDialog;
        this.nomesService = nomesService;
        this.closeFunction = () => {
            this.closeDialog();
        }

        console.log('Nome edit: ' + this.nomeEdit);
    }

    public closeDialog() {
        console.log('Chamei Close');
        this.$mdDialog.hide();
    }

    public editAndClose() {
        this.nomesService.edit(this.nomeEdit);
        this.$mdDialog.hide();
    }
}


