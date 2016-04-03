/**
 * Created by beto_ on 31/03/2016.
 */
declare function $firebaseArray(ref: any);

export class NomesServices {

    static IID = "NomesServices";

    private firebase: any;
    private ref: any;
    private nomes;

    static $inject = ['$firebaseArray'];
    constructor($firebaseArray: any){
        this.nomes = $firebaseArray(new Firebase("https://angular-demo-bhask.firebaseIO.com"));
        console.log("carreguei o service");
    }

    list(): any {
        return this.nomes;
    }

    add(nomeObj: any): void{
        this.nomes.$add(nomeObj);
    }

    delete(nomeObj: any): any{
        this.nomes.$remove(nomeObj);
    }
    edit(nomeObj: any){
        this.nomes.$remove(nomeObj);
        this.nomes.$add(nomeObj);
    }
}
