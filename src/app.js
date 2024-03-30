/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
console.log("Hola, soy María");

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

const getPronAdj = pronoun
  .map(pron => adj.map(adj => pron.concat("", adj)))
  .flat();
console.log(getPronAdj);
const getPronAdjNoun = getPronAdj
  .map(pronAdj => noun.map(noun => pronAdj.concat("", noun)))
  .flat();
console.log(getPronAdjNoun);
document.querySelector("h1.dominios").innerText = getPronAdjNoun.join(", ");
