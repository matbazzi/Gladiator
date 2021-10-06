import { Galadiateur } from './Galadiateur.class';

let joueursResult: Array<Galadiateur> = [];
let nameJoueur1 = '';
let nameJoueur2 = '';
let lancer = (joueurs: Array<string>) => {
  for (let joueur of joueurs) {
    let galadiateur = {} as Galadiateur;
    galadiateur = new Galadiateur(joueur);
    joueursResult.push(galadiateur);
  }
  return joueurs;
};
let valider = () => {
  console.log('entrer');
  const inputJoueur1: HTMLInputElement = document.querySelector('#joueur1');
  const inputJoueur2: HTMLInputElement = document.querySelector('#joueur2');
  const inputAcceuil: HTMLInputElement = document.querySelector('#idAcceuil');
  const listJouer1: HTMLInputElement = document.querySelector('#idNom');

  nameJoueur1 = inputJoueur1.value;
  console.log(nameJoueur1);
  nameJoueur1 = inputJoueur2.value;
  lancer([nameJoueur1, nameJoueur2]);
  inputAcceuil.hidden = true;
  listJouer1.innerText = nameJoueur1;
};
