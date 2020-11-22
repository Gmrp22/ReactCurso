import React from "react";
import confLogo from "../images/badge-header.svg";
//svg en la variable conflogo lo hace create react app, empaqueta los archivos importados como imagen y hace dir a internet

//los componentes son clases
class Badge extends React.Component {
  render() {
    //define el resultado que se ve en pantalla
    return (
      <div>
        <div>
          {/* Saca de imagen */}
          <img src={confLogo} alt="Logo" />
          {/* En src no se puede dar un string, props, se le da una direccion
          no nos preocupamos
          se le da un hash y el navegador ya no teine que recargar porque ya la tiene en cache
          */}
        </div>
        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"></img>
          <h1>Gilda</h1>
          <br></br>
          <h1>Rivera</h1>
        </div>
        <div>
          <p>Estudiante</p>
          <p>GMRP22</p>
        </div>
        <div>
          <footer>platziconf</footer>
        </div>
      </div>
    );
  }
}
export default Badge; //exportar componente
