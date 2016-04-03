/**
 * Created by beto_ on 03/04/2016.
 */
export class CrudNomesDirective implements ng.IDirective{
    static IID = "crudNomes";
    constructor(){
        return {
            templateUrl: 'components/crud-nomes/crud-nomes.html',
            restrict: 'AE'
        };
    }
}
