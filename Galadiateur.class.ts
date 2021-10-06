import { Arme } from "./Arme.class";
export class Gladiateur{
     private _nom:String;
     private _point:number;
     private _arme:Arme;
     static vie=100;
    constructor(nom:string="",point:number=Gladiateur.vie,arme:string){
        this._nom=nom;
        this._point=point;
        this._arme=Arme[arme];
    }

}