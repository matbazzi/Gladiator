import { Gladiateur } from './Gladiateur.class';

let joueurs: Array<Gladiateur> = [];
let nameJoueur1 = '';
let nameJoueur2 = '';
let lancer = (joueurs: Array<string>) => {
  for (let joueur of joueurs) {
    let gladiateur = new Gladiateur(joueur);
    joueurs.push(gladiateur);
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
