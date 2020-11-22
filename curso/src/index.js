//  const element = document.createElement('h1'); //creteElement necesita parametro del elemento a crear
//  element.innerText = 'Hello, Platzi Badges!';

//  const container = document.getElementById('app');

//  container.appendChild(element); // añadir elemento

//React hace analogo a createElement
//ReactDOM analogo a appendChilde
import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello, Platzi </h1>; //crear elementos
//<h1> es jsx entonces se importa react

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container); // analogo append child render
//a render se le pasa que se quiere renderizar y container donde (que,donde)
