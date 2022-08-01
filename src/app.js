/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dom = [".com", ".es"];
let ending = "";

function mixer(pron, adj, noun, dom) {
  for (let i = 0; i < pron.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let n = 0; n < noun.length; n++) {
        for (let d = 0; d < dom.length; d++) {
          ending =
            ending + pron[i] + adj[j] + noun[n] + dom[d] + " " + "<br/><br/>";
          console.log(pron[i] + adj[j] + noun[n] + dom[d]);
        }
      }
    }
  }
}
mixer(pronoun, adj, noun, dom);
let resultado = document.getElementById("nombre");
resultado.innerHTML = ending;
