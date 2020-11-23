
import React from "react";
import ReactDOM from "react-dom";

import Badges from "./pages/Badges";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);

ReactDOM.render(<Badges />, container);
//se le pasan las props

//react dom se da siempre un elemento, con closing tag
//si no tiene <> es componentene
