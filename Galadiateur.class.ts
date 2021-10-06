import { Arme } from './Arme.class';
export class Galadiateur {
  private _nom: String;
  private _point: number;
  private _arme: Arme;
  static vie = 100;
  constructor(nom: string = '', point?: number, arme?: string) {
    this._nom = nom;
    this._point = point ? point : Galadiateur.vie;
    this._arme = Arme[arme];
  }
}
