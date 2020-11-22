//  const element = document.createElement('h1'); //creteElement necesita parametro del elemento a crear
//  element.innerText = 'Hello, Platzi Badges!';

//  const container = document.getElementById('app');

//  container.appendChild(element); // añadir elemento

//React hace analogo a createElement
//ReactDOM analogo a appendChilde
import React from "react";
import ReactDOM from "react-dom";

//const element = <h1>Hello, Platzi </h1>; //crear elementos

//alternativa
//const element = React.createElement("a", {href:'https://principal.url.edu.gt/'}, "Hola soy children");

//{} props o properties
//(elementocrear, atreibutos, children(innertext o innerhtml))
//<h1> es jsx entonces se importa react
import Badge from './components/badge'


const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge/>, container); 

//react dom se da siempre un elemento, con closing tag
//si no tiene <> es componentene